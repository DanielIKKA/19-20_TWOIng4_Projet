import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {SquareLoader} from "./SpinLoader";
import ApiManager from "../models/ApiManager";
import _ from 'lodash';
import {EventEmitter} from 'events';
import Select from "react-select";

let emitter = new EventEmitter();
let EVENT_GET_END_USER = 'put_end-user';
let EVENT_GET_END_SENSOR = 'put_end-sensor';


const optionsType = [
    { value: 'temperature', label: 'temperature' },
    { value: 'humidity', label: 'humidity' },
    { value: 'airPollution', label: 'air pollution' }
  ]

const option = [
    "user",
    "sensor",
    "measure"
];


class Fetcher {
    manager = new ApiManager();
    Alldata = [];

    fetch(type)
    {
        this.Alldata = [];
        if(type === option[1]){
            this.fetchAllUser();
        }
        else if(type === option[2]){
            this.fetchAllSensor();
        }
    }

    //  dataClient : pays + personInHouse + houseSize
    get(data, myOption) {

        if(myOption === option[0])
        {
            this.putAUser(data);
        }
        else if(myOption === option[1])
        {
            this.putASensor(data);
        }
        else if(myOption === option[2])
        {
            this.putAMeasure(data);
        }  
    }

    fetchAllUser()
    {
        this.manager.fetchAllUsers()
            .then(response => {
                let raw = response.data;
                raw.forEach(user => this.Alldata.push({value : user._id, label : user._id}));
                emitter.emit(EVENT_GET_END_USER, this.Alldata);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchAllSensor()
    {
        this.manager.fetchAllSensors()
            .then(response => {
                let raw = response.data;
                raw.forEach(sensor => this.Alldata.push({value : sensor._id, label : sensor._id}));
                emitter.emit(EVENT_GET_END_SENSOR, this.Alldata);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    putAUser(data) {
        this.manager.createOneUser(data)
            .then(response => {
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    putASensor(data) {
        this.manager.createOneSensor(data)
            .then(response => {
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    putAMeasure(data) {
        this.manager.createOneMeasure(data)
        .then(response => {
        })
        .catch(err => {
            console.error('pb', err);
        })
    }
}


class FormWidget extends Component {

    fetcher = new Fetcher();

    data = [];

    constructor(props) {
        super(props);

        this.state = {
            waiting: true,
            //user
            valuePays: "",
            valuePersonInHouse: 0,
            valueHouseSize: "",
            //sensor
            selectedOptionSelect : null,
            valueLocation : "",
            //measure
            valueSensor : 0,
            valueType : "",
            valueValue : 0,
            //select

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
        this.handleSubmitSensor = this.handleSubmitSensor.bind(this);
        this.handleSubmitMeasure = this.handleSubmitMeasure.bind(this);
        this.formClient = this.formClient.bind(this);
        this.formSensor = this.formSensor.bind(this);
        this.formMeasure = this.formMeasure.bind(this);
    }

    componentDidMount () {
       this.fetcher.fetch(this.props.selectedOption);
        emitter.on(this.props.selectedOption === "sensor" ? EVENT_GET_END_USER : EVENT_GET_END_SENSOR, (Alldata) => {
            this.data = Alldata;
            this.setState({waiting : false});
        })

    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleChangeSelectSensor = selectedOptionSelect => {
        this.setState({ selectedOptionSelect});
    };

    handleChangeSelectMeasure = valueSensor => {
        this.setState({ valueSensor});
    }

    handleChangeSelectMeasureSimple = valueType => {
        this.setState({ valueType});
    }

    handleSubmitUser(event) {
        this.fetcher.get([this.state.valuePays,this.state.valuePersonInHouse,this.state.valueHouseSize], option[0]);
        event.preventDefault();
      }

      handleSubmitSensor(event) {
        this.fetcher.get([this.state.selectedOptionSelect.value,this.state.valueLocation], option[1]);
        event.preventDefault();
      }

      handleSubmitMeasure(event) {
        this.fetcher.get([this.state.valueSensor.value,this.state.valueType.value,this.state.valueValue], option[2]);
        event.preventDefault();
      }

    squareLoader() {
        const {mode} = this.props;
        return(<SquareLoader mode={mode} bgLight={'#DA5367'} bgDark={'#78BEFF'}/>);
    }

    formClient() {
        return(
            <div>
                <tr>
                    <td><label for="pays">Pays :</label></td>
                    <td><input type="text"  name="valuePays" onChange={this.handleChange}/></td>
                </tr>
                <tr>
                    <td><label for="personInHouse">nombre de Personne :</label></td>
                    <td><input type="text" name="valuePersonInHouse" onChange={this.handleChange}/></td>
                </tr>
                <tr>
                    <td><label for="HouseSize">House Size :</label></td>
                    <td><input type="text" name="valueHouseSize" onChange={this.handleChange}/></td>
                </tr>
            </div>
        );
    }

    formSensor() {
        const { selectedOptionSelect } = this.state;
        return(
            <div>
                <tr>
                    <td><label for="valueUser">User ID :</label></td>
                    <td>
                        <Select
                            value={selectedOptionSelect} onChange={this.handleChangeSelectSensor}
                            options={this.data} className={`my-3 text-dark`}
                        />
                    </td>
                </tr>
                <tr>
                    <td><label for="valueLocation">Location :</label></td>
                    <td><input type="text" name="valueLocation" onChange={this.handleChange}/></td>
                </tr>
            </div>
        )
    }

    formMeasure() {
        const { valueSensor, valueType } = this.state;
        return(
            <div>
                <tr>
                    <td><label for="pays">Sensor ID :</label></td>
                    <td>
                        <Select
                            value={valueSensor} onChange={this.handleChangeSelectMeasure}
                            options={this.data} className={`my-3 text-dark`}
                        />
                    </td>
                </tr>
                <tr>
                    <td><label for="type">type :</label></td>
                    <td>
                        <Select
                            value={valueType} onChange={this.handleChangeSelectMeasureSimple}
                            options={optionsType} className={`my-3 text-dark`}
                        />
                    </td>
                </tr>
                <tr>
                    <td><label for="value">House Size :</label></td>
                    <td><input type="text" name="valueValue" onChange={this.handleChange}/></td>
                </tr>
            </div>
        );
    }

    render() {
        const {xs, sm, md, lg, xl, mode} = this.props;
        const { selectedOption } = this.props;

        return(
            <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}
                 id={'total-widget-wrapper'}
                 className={'my-3'}
            >
                <Col id={'total-widget'}
                     className={'p-3 shadow-shorter text-center'}
                     style={{height: 200}}
                >

                    <form 
                    onSubmit={selectedOption === option[0] ? this.handleSubmitUser
                            : selectedOption === option[1] ? this.handleSubmitSensor
                            : this.handleSubmitMeasure}>

                        <table>
                            {selectedOption === option[0] ? this.formClient()
                            : selectedOption === option[1] ? this.formSensor()
                            : this.formMeasure()}
                        </table>
                        <tr>
                            <input type='Submit' />
                        </tr>
                    </form>
                </Col>
            </Col>
        );
    }
}
export default FormWidget;