import React , {Component} from 'react'
import {Col, Row} from "react-bootstrap";

class Fetcher {
    manager = new ApiManager();

    // each data {name : __, value : ___, number: ___}
    data = [];

    fetch(iconName) {
        // clear
        this.data = 0;

        // pays
        if(iconName === "fireplace") {
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
                this.data = _.find(allMeasure, function(o) { return o.type == 'temperature'; });  
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
                this.data = _.find(allMeasure, function(o) { return o.type == 'temperature'; });  
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
                this.data = _.find(allMeasure, function(o) { return o.type == 'temperature'; });  
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
}

class LastWidget extends Component {

    constructor(props) {
        super(props);

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
                border: 'none',

                transition : 'color 500ms, background-color 500ms'
            }
        }
    }

    time(s) {
        return new Date(s * 1e3).toDateString().slice(-13, -5);
    }

    render() {
        //Content
        const { mode, value, iconName} = this.props;

        //responsive
        const {xs, sm, md, xl, lg} = this.props;

        return (
            <Col id={'lastWidget-wrapper'}
                 xs={xs} sm={sm} md={md} xl={xl} lg={lg}
                 className={"my-3"}
            >
                <Col id={'last-widget'}
                     style={mode ? this.styles.dark : this.styles.light}
                     className={"p-3 shadow-shorter"}>
                    <h1 className={"t-size-1-5 fw-600 mb-3"}>Last Measure</h1>
                    <Row className={'justify-content-center'}>
                        <i className={'align-self-center material-icons t-size-3'}>{iconName}</i>
                        <h2 className={"t-size-4 fw-100 font-italic text-center m-0"}>
                            {value}
                        </h2>
                    </Row>
                    <p className={'mt-3 mb-0 fw-300'}>Updated: {this.time(Date.now())}</p>
                </Col>
            </Col>
        );
    }
}

export default LastWidget;