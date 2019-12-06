import React, {Component} from "react";
import {Col} from "react-bootstrap";

class ReportWidget extends Component {

    style = {
        light : {
            color : 'black',
            backgroundColor : '#E9EAEC',
            borderRadius: '0.4em',

            transition : 'color 500ms, background-color 500ms'
        },
        dark : {
            color : 'white',
            backgroundColor : '#272F45',
            borderRadius: '0.4em',

            transition : 'color 500ms, background-color 500ms'
        }
    };

    constructor(props) {
        super(props);

        this.state =  {

        }

    }

    render() {
        // responsive props & appearance
        const {xs, sm, md, lg, xl, mode} = this.props;

        //

        return (
          <Col id={"report-wrapper"}
               xs={xs} sm={sm} md={md} xl={xl} lg={lg}
               className={"my-3"}>
              <Col id={"report"}
                   className={"p-3"}
                   style={mode ? this.style.dark : this.style.light}>

                  <h1 className={"t-size-1-5 fw-600"}>Report</h1>
                  

              </Col>
          </Col>
        );
    }

}

export default ReportWidget;