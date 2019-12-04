import React , {Component} from 'react'
import {Col} from "react-bootstrap";

class LastWidget extends Component {

    constructor(props) {
        super(props);

        this.styles = {
            light: {
                fontWeight: 100,
                backgroundColor: props.lightBG ? props.lightBG : "rgb(218,83,103,1)",
                color: props.lightCol? props.lightCol : "white",
                borderRadius: '0.4em',
                border: 'none',

                transition : 'color 500ms, background-color 500ms'
            },
            dark: {
                fontWeight: 100,
                backgroundColor: props.darkBG ? props.darkBG : "rgb(218,83,103,0.5)",
                color: props.darkCol ? props.darkCol : "white",
                borderRadius: '0.4em',
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
                 style={mode ? this.styles.dark : this.styles.light}
                 className={"p-3"}
            >
                <h1 className={"t-size-1-5 fw-600"}>Last Measure</h1>
                <h2 className={"t-size-5 fw-100 font-italic text-center m-0"}>
                    <i className={'material-icons t-size-4'}>{iconName}</i>
                    {value}
                </h2>
            </Col>
        );
    }
}

export default LastWidget;