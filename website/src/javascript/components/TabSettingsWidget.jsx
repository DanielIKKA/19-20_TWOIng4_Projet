import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {EventEmitter} from "events";
import ApiManager from "../models/ApiManager";
import {Route, Switch} from 'react-router-dom'
import {SquareLoader} from "./SpinLoader";

let emitter = new EventEmitter();
let EVENT_FETCH_END = 'fetch_end';
let EVENT_FETCH_START = 'fetch_start';

const options = ['clients', 'sensors', 'measures'];
const style = {
    light : {
        color : 'black',
        backgroundColor : '#FFFFFF',
        borderRadius: '0.2em',

        transition : 'color 500ms, background-color 500ms'
    },
    dark : {
        color : 'white',
        backgroundColor : '#272F45',
        borderRadius: '0.2em',

        transition : 'color 500ms, background-color 500ms'
    }
};

class Fetcher {
    manager = new ApiManager();

    fetch(type) {
        // clear
        this.data = 0;

        // pays
        if(type === options[0]) {
            emitter.emit(EVENT_FETCH_START);
            this.fetchNbClient();
            // temperature
        } else if (type === options[1]) {
            emitter.emit(EVENT_FETCH_START);
            this.fetchNbSensor();
            // humidity
        } else if (type === options[2]) {
            emitter.emit(EVENT_FETCH_START);
            this.fetchNbMeasure();
            //air pollution
        }
    }

    fetchNbClient() {
        this.manager.fetchAllUsers()
            .then(response => {
                emitter.emit(EVENT_FETCH_END, response.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchNbSensor() {
        this.manager.fetchAllSensors()
            .then(response => {
                emitter.emit(EVENT_FETCH_END, response.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchNbMeasure() {
        this.manager.fetchAllMeasures()
            .then(response => {
                emitter.emit(EVENT_FETCH_END, response.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
}

const Clients = (props) => {
    const {data, mode} = props;

    function clientTitle() {
        return (
            <Row className={'shadow-shorter mx-3 text-center my-2'}
                 style={mode? style.dark : style.light}>
                <Col as={'h1'} className={'m-0 py-2'}>Location</Col>
                <Col as={'h1'} className={'m-0 py-2'}>Peroson In House</Col>
                <Col as={'h1'} className={'m-0 py-2'}>House Size</Col>
            </Row>
        );
    }
    function clientCell(data, index) {
        return (
            <Row key={index} className={'shadow-shorter bg-white mx-3 text-center my-2'}>
                <Col as={'p'} className={'m-0 py-2'}>{data.location}</Col>
                <Col as={'p'} className={'m-0 py-2'}>{data.personsInHouse}</Col>
                <Col as={'p'} className={'m-0 py-2'}>{data.houseSize}</Col>
            </Row>
        )
    }

    return (
        <Col>
            {clientTitle()}
            <Container fluid={true}
                       style={{height : '40vh', overflowY : 'scroll'}}>
                { data.map((value, index) => clientCell(value, index)) }
            </Container>
        </Col>
    )
};
const Sensors = (props) => {
    const {data} = props;

    function sensorTitle() {
        return (
            <Row className={'shadow-shorter bg-white mx-3 text-center my-2'}>
                <Col as={'h1'} className={'m-0 py-2'}>Location</Col>
                <Col as={'h1'} className={'m-0 py-2'}>creationDate</Col>
            </Row>
        );
    }
    function sensorCell(data, index) {
        return (
            <Row key={index} className={'shadow-shorter bg-white mx-3 text-center my-2'}>
                <Col as={'p'} className={'m-0 py-2'}>{data.location}</Col>
                <Col as={'p'} className={'m-0 py-2'}>{data.creationDate}</Col>
            </Row>
        )
    }

    return (
        <Col>
            {sensorTitle()}
            <Container fluid={true}
                       style={{height : '40vh', overflowY : 'scroll'}}>
                { data.map((value, index) => sensorCell(value, index)) }
            </Container>
        </Col>
    )
};

class TabSettingsWidget extends Component {

    fetcher = new Fetcher();
    data = [];
    isMount = false;

    constructor(props) {
        super(props);

        this.state = {
            waiting : true
        }
    }

    componentDidMount() {
        this.isMount = true;

        emitter.on(EVENT_FETCH_END, (data) => {
            this.data = data;
            if(this.isMount) {
                this.setState({waiting : false});
            }
        });
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    squareLoader() {
        const {mode} = this.props;
        return(<SquareLoader mode={mode} bgLight={'#DA5367'} bgDark={'#78BEFF'}/>);
    }

    router() {
        const {mode} = this.props;

        return (
            <Switch>
                <Route exact path={`/settings/${options[0]}`}>
                    <Clients data={this.data} mode={mode}/>
                </Route>
                <Route exact path={`/settings/${options[1]}`}>
                    <Sensors data={this.data} mode={mode}/>
                </Route>
            </Switch>
        )
    }

    render() {
        const {attr} = this.props.match.params;
        this.fetcher.fetch(attr);

        return(
            <>
                {this.state.waiting ? this.squareLoader() : this.router()}
            </>
        );
    };
}

export default TabSettingsWidget;