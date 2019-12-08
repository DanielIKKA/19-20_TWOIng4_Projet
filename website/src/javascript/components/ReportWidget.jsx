import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import Select from "react-select";
import CustomPieChart from "./CustomPieChart";

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
    options = [
        { value : "pays", label : "Pays"},
        { value : "nbPerson", label: "Number person in houses"},
        { value : "houseSize", label: "House size"}
    ];
    data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group C', value: 200 }
    ];

    constructor(props) {
        super(props);

        this.state =  {
            selectedOption: null,
        }
    }

    handleChange = selectedOption => {
        if (selectedOption === this.options[0]) {
            this.data = this.fetchDataForPays();
        } else if (selectedOption === this.options[1]) {
            this.data = this.fetchDataForNbPerson();
        } else if (selectedOption === this.options[2]) {
            this.data = this.fetchDataForHouseSize();
        }
        // after for the re-updating of the view
        this.setState({ selectedOption });
    };

    fetchDataForPays() {
        console.log('pays');
        return this.data;
    }

    fetchDataForNbPerson() {
        console.log('nbPerson');
        return this.data;
    }

    fetchDataForHouseSize() {
        console.log('house size');
        return this.data;
    }

    reportLine = (text, percent, key) => {
        return(
            <Col key={key} className={'px-2 my-2'}>
                <Row className={'text-center'}>
                    <Col as={'p'} className={'m-0'}>{text}</Col>
                    <Col as={'p'} className={'m-0'}>{percent} %</Col>
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
                   style={mode ? this.style.dark : this.style.light}>

                  <h1 id={'report-title'} className={"t-size-1-5 fw-600"}>Report</h1>

                  <Select
                      value={selectedOption} onChange={this.handleChange}
                      options={this.options} className={`my-3 text-dark`}
                  />

                  <CustomPieChart data={this.data} mode={mode}/>

                  {this.data.map((value, index) =>
                      this.reportLine(value.name, value.value, index)
                  )}
              </Col>
          </Col>
        );
    }
}

export default ReportWidget;