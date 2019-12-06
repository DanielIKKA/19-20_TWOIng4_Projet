import React, {Component} from "react";
import {Col} from "react-bootstrap";
import Select from "react-select";

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

    constructor(props) {
        super(props);

        this.state =  {
            selectedOption: null,
        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
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
                      options={this.options} className={"my-3"}
                  />

                  
              </Col>
          </Col>
        );
    }

}

export default ReportWidget;