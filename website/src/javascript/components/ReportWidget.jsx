import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Select from "react-select";
import CustomPieChart from "./CustomPieChart";
import ApiManager from "../models/ApiManager";
import _ from 'lodash';
import {EventEmitter} from 'events';


let emitter = new EventEmitter();
let EVENT_FETCH_END = 'fetch_end';

const options = [
    { value : "pays", label : "Pays"},
    { value : "nbPerson", label: "Number person in houses"},
    { value : "houseSize", label: "House size"}
];

class Fetcher {
    manager = new ApiManager();

    // each data {name : __, value : ___, number: ___}
    data = [];

    fetch(option) {
        // clear
        this.data = [];
        //emitter(EVENT_FETCH_BEGIN);

        // pays
        if(option === options[0]) {
            this.fetchByPays();
            // nb person
        } else if (option === options[1]) {
            this.fetchByPeron();
            // house size
        } else if (option === options[2]) {
            this.fetchBySize();
        }
    }

    fetchByPays() {
        this.manager.fetchAllUsers()
            .then(response => {
                let raw = response.data;
                //find all existed size
                let allCountries = _.uniqBy(raw, 'location');

                allCountries.forEach(user => {
                    let dataFiltered = _.filter(raw, ['location', user.location]);
                    if(dataFiltered.length > 0) {
                        this.data.push({
                            name : _.startCase(user.location),
                            value : _.round(dataFiltered.length/raw.length*100, 2),
                            number : dataFiltered.length
                        });
                    }
                });

                this.data = _.orderBy(this.data, ['value', 'name'], ['desc', 'asc']);
                emitter.emit(EVENT_FETCH_END, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchByPeron() {
        this.manager.fetchAllUsers()
            .then(response => {
                let raw = response.data;
                let underThree = _.filter(raw, elem => {return elem.personsInHouse <= 2});
                let betweenThreeFive = _.filter(raw, elem => {return (elem.personsInHouse >= 3 && elem.personsInHouse <= 5)});
                let betweenSixEight = _.filter(raw, elem => {return (elem.personsInHouse >= 6 && elem.personsInHouse <= 8)});
                let overEight = _.filter(raw, elem => {return elem.personsInHouse > 8});

                if(underThree.length > 0) {
                    this.data.push({name:'Under 3', value: _.round(underThree.length/raw.length*100,2), number: underThree.length});
                }
                if(betweenThreeFive.length > 0) {
                    this.data.push({name:'Between 3 and 5', value: _.round(betweenThreeFive.length/raw.length*100,2), number: betweenThreeFive.length});
                }
                if(betweenSixEight.length > 0) {
                    this.data.push({name:'Between 6 and 8', value: _.round(betweenSixEight.length/raw.length*100,2), number: betweenSixEight.length});
                }
                if(overEight.length > 0) {
                    this.data.push({name:'Over 8', value: _.round(overEight.length/raw.length*100,2), number: overEight.length});
                }

                emitter.emit(EVENT_FETCH_END, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    fetchBySize() {
        this.manager.fetchAllUsers()
            .then(response => {
                let raw = response.data;

                //find all existed size
                let sizes = _.uniqBy(raw, 'houseSize');
                sizes.forEach(user => {
                    let dataFiltered = _.filter(raw, ['houseSize', user.houseSize]);
                    if(dataFiltered.length > 0) {
                        this.data.push({
                            name : _.startCase(user.houseSize),
                            value : _.round(dataFiltered.length/raw.length*100, 2),
                            number : dataFiltered.length
                        });
                    }

                });

                emitter.emit(EVENT_FETCH_END, this.data);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
}

class ReportWidget extends Component {

    style = {
        light : {
            color : 'black',
            backgroundColor : '#E9EAEC',
            borderRadius: '0.4em',
            boxShadow : '2px 2px 5px rgba(0,0,0,0.3)',

            transition : 'color 500ms, background-color 500ms'
        },
        dark : {
            color : 'white',
            backgroundColor : '#272F45',
            borderRadius: '0.4em',

            transition : 'color 500ms, background-color 500ms'
        }
    };
    data = [];

    fetcher = new Fetcher();

    constructor(props) {
        super(props);

        this.state =  {
            selectedOption: null,
        };
    }

    componentDidMount() {
        this.handleChange(options[1]);
    }

    handleChange = selectedOption => {
        this.fetcher.fetch(selectedOption);

        emitter.on(EVENT_FETCH_END, (data) => {
            this.data = data;
            // after for the re-updating of the view
            this.setState({ selectedOption });
        });
    };

    reportLine = (text, percent, number, key) => {
        return(
            <Col key={key} id={`detail-wrapper-${key}`} className={'px-2 my-2'}>
                <Row className={'text-center'}>
                    <Col as={'p'} className={'m-0 fw-600'}>{text}</Col>
                    <Col as={'p'} className={'m-0'}><span className={'fw-400'}>Total: </span>{number}</Col>
                    <Col as={'p'} className={'m-0 fw-200'}>{percent}%</Col>
                </Row>
                <Col as={'svg'} height={2}>
                    <rect width={'100%'} height={'50%'} style={this.props.mode ? {fill : 'white'} : {fill : 'black'}}/>
                </Col>
            </Col>
        );
    };

    render() {
        // responsive props & appearance
        const {xs, sm, md, lg, xl, mode} = this.props;

        const { selectedOption } = this.state;

        return (
          <Col id={"report-wrapper"}
               xs={xs} sm={sm} md={md} xl={xl} lg={lg}
               className={"my-3"}>
              <Col id={"report"}
                   className={"p-3"}
                   style={mode ? this.style.dark : this.style.light}
              >

                  <h1 id={'report-title'} className={"t-size-1-5 fw-600"}>Report</h1>

                  <Select
                      value={selectedOption} onChange={this.handleChange}
                      options={options} className={`my-3 text-dark`}
                  />

                  <CustomPieChart data={this.data} mode={mode}/>

                  <Container style={{
                      overflowY :'scroll',
                      overflowX : 'hidden',
                      height : 150}}
                             className={'p-0'}>
                      {this.data.map((elem, index) =>
                          this.reportLine(elem.name, elem.value, elem.number, index)
                      )}
                  </Container>
                  <Row className={'mt-5 mb-2'}>
                      <Col xs={{offset:4, span:4}} className={'p-2 text-center t-size-1-2 fw-500'}>
                          Total: {_.sumBy(this.data, 'number')}
                      </Col>
                      <Col xs={{span:4}} className={'p-2 text-center t-size-1-2 fw-500'}>
                          {_.round(_.sumBy(this.data, 'value'),0)}%
                      </Col>
                  </Row>

              </Col>
          </Col>
        );
    }
}

export default ReportWidget;