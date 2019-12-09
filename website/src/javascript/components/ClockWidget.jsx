import React from "react";
import {Col} from 'react-bootstrap';
import Clock from 'react-live-clock';

const ClockWidget = (props) => {

    const styles = {
        light: {
            color: props.lightCol? props.lightCol : "black",
            backgroundColor : 'white',
            borderRadius: '0.2em',
            height : '100%',

            transition : 'color 500ms, background-color 500ms'
        },
        dark: {
            color: props.darkCol ? props.darkCol : "white",
            borderRadius: '0.2em',
            height : '100%',
            border : '0.1em solid white',

            transition : 'color 500ms, background-color 500ms'
        }
    };

    // responsive
    const {xs, sm, md, lg, xl} = props;

    const {mode} = props;

    return (
        <Col id={"wrapper-clock"} className={"my-3"}
             xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <Col id={'clock'} style={mode ? styles.dark : styles.light}
                 className={"d-flex align-items-center justify-content-center shadow-shorter"}>
                <h1 className={"m-0 t-size-3 fw-200"}>
                    <Clock
                    format={'HH:mm'}
                    ticking={true}/>
                </h1>
            </Col>
        </Col>
    );
};
export default ClockWidget;
