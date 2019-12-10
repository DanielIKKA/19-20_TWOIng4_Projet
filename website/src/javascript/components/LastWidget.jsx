import React , {Component} from 'react'
import {Col, Row} from "react-bootstrap";
import ApiManager from "../models/ApiManager";
import _ from 'lodash';
import {EventEmitter} from 'events';
import {SquareLoader} from "./SpinLoader";

let emitter = new EventEmitter();
let EVENT_FETCH_END_TEMP = 'fetch_end-last-widget-temperature';
let EVENT_FETCH_END_HUM = 'fetch_end-last-widget-humidity';
let EVENT_FETCH_END_AP = 'fetch_end-last-widget-airpollution';

class Fetcher {
    manager = new ApiManager();

    //  data : measure
    data = {};

    fetch(iconName) {
        // clear
        this.data = {};

        // pays
        if(iconName === "wb_sunny") {
            this.fetchLastTemperature();
            // temperature
        } else if (iconName === "invert_colors") {
            this.fetchLastHumidity();
            // humidity
        } else if (iconName === "eco") {
            this.fetchLastAirPollution();
            //air pollution
        }
    }

    fetchLastTemperature() {
        this.manager.fetchAllMeasures()
            .then(response => {
                let raw = response.data;
                let allMeasure = _.orderBy(raw, ['creationDate', 'type'], ['desc', 'asc']);
                let allTemperature  = _.filter(allMeasure, ['type', 'temperature']);
                this.data = allTemperature[0];
                emitter.emit(EVENT_FETCH_END_TEMP, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchLastHumidity() {
        this.manager.fetchAllMeasures()
            .then(response => {
                let raw = response.data;
                let allMeasure = _.orderBy(raw, ['creationDate', 'type'], ['desc', 'asc']);
                let allTemperature  = _.filter(allMeasure, ['type', 'humidity']);
                this.data = allTemperature[0];

                emitter.emit(EVENT_FETCH_END_HUM, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }

    fetchLastAirPollution() {
        this.manager.fetchAllMeasures()
            .then(response => {
                let raw = response.data;
                let allMeasure = _.orderBy(raw, ['creationDate', 'type'], ['desc', 'asc']);
                let allTemperature  = _.filter(allMeasure, ['type', 'airPollution']);
                this.data = allTemperature[0];

                emitter.emit(EVENT_FETCH_END_AP, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
}

class LastWidget extends Component {
    
    fetcher = new Fetcher();
    data = {};
    isMount = false;

    constructor(props) {
        super(props);

        this.state = {
            waiting : true
        };

        this.styles = {
            light: {
                fontWeight: 100,
                backgroundColor: props.lightBG ? props.lightBG : "rgb(218,83,103,1)",
                color: props.lightCol? props.lightCol : "white",
                borderRadius: '0.2em',
                border: 'none',

                transition : 'color 500ms, background-color 500ms'
            },
            dark: {
                fontWeight: 100,
                backgroundColor: props.darkBG ? props.darkBG : "rgb(218,83,103,0.5)",
                color: props.darkCol ? props.darkCol : "white",
                borderRadius: '0.2em',
                height : '100%',
                border: 'none',

                transition : 'color 500ms, background-color 500ms'
            }
        }
    }

    time(s) {
        console.log(s);
        const year = s.slice(0,4);
        //const year = "2019";
        const month = s.slice(5,7);
        const day = s.slice(8,10);
        const date = day + " " + month + " " + year;
        //const date = s.slice(8,10) + " " + s.slice(5,7) + " " + s.slice(0,4);
        return date;
        //{this.time(this.data? this.data.creationDate : "2019-09-24T00:25:42Z")}
    }
    
    componentDidMount () {
        this.isMount = true;
        const {iconName} = this.props;
        this.fetcher.fetch(iconName);

        emitter.on(iconName === "wb_sunny" ? EVENT_FETCH_END_TEMP
            : iconName === "invert_colors" ? EVENT_FETCH_END_HUM
                : EVENT_FETCH_END_AP
            , (data) => {
                this.data = data;
                setTimeout(() => {
                    if(this.isMount) {
                        this.setState({waiting : false});
                    }
                }, 500);

            })

    }
    componentWillUnmount() {
        this.isMount = false;
    }

    content() {
        return(
            <>
                <Row className={'justify-content-center'}>
                    <i className={'align-self-center material-icons t-size-3'}>{this.props.iconName}</i>
                    <h2 className={"t-size-4 fw-100 font-italic text-center m-0"}>
                        {this.data ? this.data.value : ""}
                        {this.props.iconName === "wb_sunny" ? "°C" : "%"}
                    </h2>
                </Row>
                <p className={'mt-3 mb-0 fw-300'}>Updated: {this.data? this.data.creationDate : "2019-11-21"}</p>
            </>
        )
    }

    squareLoader() {
        const {mode} = this.props;
        return(<SquareLoader mode={mode} bgLight={'#45A196'} bgDark={'#45A196'}/>);
    }

    render() {
        //Content
        const { mode, subtitle} = this.props;

        //responsive
        const {xs, sm, md, xl, lg} = this.props;
        //this.fetcher.fetch(iconName);


        return (
            <Col id={'lastWidget-wrapper'}
                 xs={xs} sm={sm} md={md} xl={xl} lg={lg}
                 className={"my-3"}
            >
                <Col id={'last-widget'}
                     style={mode ? this.styles.dark : this.styles.light}
                     className={"p-3 shadow-shorter"}>
                    <h1 className={"t-size-1-5 fw-600 mb-3"}>Last Measure <span className={'fw-300 t-size-0-9 font-italic'}><br/>{subtitle}</span></h1>
                    {this.state.waiting ? this.squareLoader() : this.content()}
                </Col>
            </Col>
        );
    }
}

export default LastWidget;