import React , {Component} from 'react'
import {Col, Row} from "react-bootstrap";

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
                    <h1 className={"t-size-1-5 fw-600"}>Last Measure</h1>
                    <Row className={'justify-content-center'}>
                        <i className={'align-self-center material-icons t-size-3'}>{iconName}</i>
                        <h2 className={"t-size-4 fw-100 font-italic text-center m-0"}>
                            {value}
                        </h2>
                    </Row>

                </Col>
            </Col>
        );
    }
}

export default LastWidget;