import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {SquareLoader} from "./SpinLoader";
import ApiManager from "../models/ApiManager";
import {EventEmitter} from 'events';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

let emitter = new EventEmitter();
let EVENT_FETCH_END_C = 'fetch_end-last-all-client-tab';
let EVENT_FETCH_END_S = 'fetch_end-last-all-sensor-tab';
let EVENT_FETCH_END_M = 'fetch_end-last-all-measure-tab';

/*class Fetcher {
    manager = new ApiManager();

    //  data : nombre de clients/sensors/measures
    data = 0;

    fetch(type) {
        // clear
        this.data = 0;

        // pays
        if(type === "clients") {
            this.fetchClient();
            // temperature
        } else if (type === "sensors") {
            this.fetchSensor();
            // humidity
        } else if (type === "measures") {
            this.fetchMeasure();
            //air pollution
        }
    }

    fetchNbClient() {
        this.manager.fetchAllUsers()
            .then(response => {
                this.data = response.data;
                emitter.emit(EVENT_FETCH_END_C, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchNbSensor() {
        this.manager.fetchAllSensors()
            .then(response => {
                this.data = response.data;
                emitter.emit(EVENT_FETCH_END_S, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchNbMeasure() {
        this.manager.fetchAllMeasures()
            .then(response => {
                this.data = response.data;
                emitter.emit(EVENT_FETCH_END_M, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }

}*/

//const type = ['users', 'sensors', 'measures'];

class TotalWidget extends Component {

    //fetcher = new Fetcher();
    data = {};

    constructor(props) {
        super(props);

        this.state = {
            waiting: true
        }
    }

    /*componentDidMount () {
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
    }*/

    render() {
        const {xs, sm, md, xl, lg} = this.props;
        const {type} = this.props;

        //https://github.com/reactjs/react-tabs

        return(
            <Tabs>
                <TabList>
                    <Tab>Clients</Tab>
                    <Tab>Sensors</Tab>
                    <Tab>Measures</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        )
    }
}

export default TotalWidget;