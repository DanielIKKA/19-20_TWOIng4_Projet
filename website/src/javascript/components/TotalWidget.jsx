import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {SquareLoader} from "./SpinLoader";
import ApiManager from "../models/ApiManager";
import _ from 'lodash';
import {EventEmitter} from 'events';

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
        } else if (type === "measure") {
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

}

//const type = ['users', 'sensors', 'measures'];

class TotalWidget extends Component {

    fetcher = new Fetcher();
    data = {};

    constructor(props) {
        super(props);

        this.state = {
            waiting: true
        }
    }

    componentDidMount () {
        const {type} = this.props;
        this.fetcher.fetch(type);
        
        emitter.on(type === "clients" ? EVENT_FETCH_END_C 
        : type === "sensors" ? EVENT_FETCH_END_S
        : EVENT_FETCH_END_M
        , (data) => {
            this.data = data;
            this.setState({waiting : false});
        })

    }

    squareLoader() {
        const {mode} = this.props;
        return(<SquareLoader mode={mode} bgLight={'#DA5367'} bgDark={'#78BEFF'}/>);
    }

    render() {
        const {xs, sm, md, xl, lg} = this.props;
        const {type} = this.props;

        return(
            <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}
                 id={'total-widget-wrapper'}
                 className={'my-3'}
            >
                <Col id={'total-widget'}
                     className={'p-3 shadow-shorter text-center'}
                     style={{height: 200}}
                >
                    <h1 className={'fw-300'}>{type}</h1>
                    {this.state.waiting ? this.squareLoader() : <h1>{this.data}</h1>}
                </Col>
            </Col>
        )
    }
}

export default TotalWidget;