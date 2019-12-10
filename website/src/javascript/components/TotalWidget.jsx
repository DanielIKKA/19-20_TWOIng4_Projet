import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {SquareLoader} from "./SpinLoader";
import ApiManager from "../models/ApiManager";
import {EventEmitter} from 'events';
import {Link} from "react-router-dom";
import _ from 'lodash';
import AddBtn from "./AddBtn";

let emitter = new EventEmitter();
let EVENT_FETCH_END_C = 'fetch_end-last-all-client';
let EVENT_FETCH_END_S = 'fetch_end-last-all-sensor';
let EVENT_FETCH_END_M = 'fetch_end-last-all-measure';

class Fetcher {
    manager = new ApiManager();

    //  data : nombre de clients/sensors/measures
    data = 0;

    fetch(type) {
        // clear
        this.data = 0;

        // pays
        if(type === "clients") {
            this.fetchNbClient();
            // temperature
        } else if (type === "sensors") {
            this.fetchNbSensor();
            // humidity
        } else if (type === "measures") {
            this.fetchNbMeasure();
            //air pollution
        }
    }

    fetchNbClient() {
        this.manager.fetchAllUsers()
            .then(response => {
                let raw = response.data;
                this.data = raw.length;
                emitter.emit(EVENT_FETCH_END_C, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchNbSensor() {
        this.manager.fetchAllSensors()
            .then(response => {
                let raw = response.data;
                this.data = raw.length;
                emitter.emit(EVENT_FETCH_END_S, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchNbMeasure() {
        this.manager.fetchAllMeasures()
            .then(response => {
                let raw = response.data;
                this.data = raw.length;
                emitter.emit(EVENT_FETCH_END_M, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }

}

class TotalWidget extends Component {

    fetcher = new Fetcher();
    data = {};
    isMount = false;

    style = {
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

    constructor(props) {
        super(props);

        this.state = {
            waiting: true
        }
    }

    componentDidMount () {
        this.isMount = true;
        const {type} = this.props;
        this.fetcher.fetch(type);
        
        emitter.on(type === "clients" ? EVENT_FETCH_END_C
            : type === "sensors" ? EVENT_FETCH_END_S
                : EVENT_FETCH_END_M
            , (data) => {

            setTimeout(() =>{
                if(this.isMount) {
                    this.data = data;
                        this.setState({waiting : false});
                }
            }, 1000);
        })
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    squareLoader() {
        const {mode} = this.props;
        return(<SquareLoader mode={mode} bgLight={'#DA5367'} bgDark={'#78BEFF'}/>);
    }

    linked() {
        const {type, linkTo, mode} = this.props;
        this.fetcher.fetch(type);
        return (
            <Link to={linkTo} className={'text-reset'}>
                <Col id={'total-widget'}
                     className={'d-flex flex-column p-3 shadow-shorter text-center justify-content-center'}
                     style={mode ? this.style.dark : this.style.light}>
                    <h1 className={'fw-500 text-decoration-none'}>{_.startCase(type)}</h1>
                    {this.state.waiting ? this.squareLoader() : <h1 className={'t-size-3 fw-200'}>{this.data}</h1>}
                </Col>
            </Link>
        )
    }
    unlinked() {
        const {mode, type} = this.props;
        this.fetcher.fetch(type);
        return (
            <Col id={'total-widget-wrapper'}
                 className={'d-flex flex-column p-3 shadow-shorter text-center justify-content-center align-items-center'}
                 style={mode ? this.style.dark : this.style.light}>
                <h1 className={'fw-500'}>{_.startCase(type)}</h1>
                {this.state.waiting ? this.squareLoader() : <h1 className={'t-size-3 fw-200'}>{this.data}</h1>}
            </Col>
        )
    }

    render() {
        const {xs, sm, md, xl, lg} = this.props;
        const {linkTo, linkAdd} = this.props;

        return(
            <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}
                 id={'total-widget-wrapper'}
                 className={'my-3'}>
                {linkTo ? this.linked() : this.unlinked()}
                <AddBtn linkTo={linkAdd}/>
            </Col>
        )
    }
}

export default TotalWidget;