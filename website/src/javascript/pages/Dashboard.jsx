import React, { Component } from 'react'
import Header from '../components/Header'
import {Col, Row} from "react-bootstrap";
import CustomBtn from "../components/CustomBtn"


const styles = {
    light : {
        backgroundColor : "white",
        transition : 'color 500ms, background-color 500ms',
    },
    dark : {
        backgroundColor : 'black',
        color : "white",
        transition : 'color 500ms, background-color 500ms'
    },
    settingsBtn : {
        backgroundColor : "#272F45"
    }
};

class Dashboard extends Component {

    onSearch = () => {
        console.log("onSearch");
    };

    handleRefresh = () => {
        console.log('on refresh');
    };

    handleSettings = (emitter) => {
        console.log(emitter.props.text);
    };

    render() {

        const {onSwitch, mode} = this.props;

        return (
            <div id={'main-wrapper'} style={mode ? styles.dark : styles.light}>
                <Header mode={mode} onSwitch={onSwitch} onRefresh={this.handleRefresh} onSearch={this.onSearch}/>
                <Row className={'dashboard-content'}>
                    <Col className={"mx-5 d-flex"}>
                        <Col xs={9} className={"my-5"}>
                            <h1 className={"fw-700 mb-0"}>Dashboard</h1>
                            <h2 className={"fw-200 mt-0"}>Welcome to the Domotics Management Panel</h2>
                        </Col>
                        <Col className={"d-flex justify-content-end align-items-center px-0"}>
                            <CustomBtn xs={8} sm={6} md={9} lg={8} xl={6}
                                       mode={mode} icon={"settings"} text={"Settings"}
                                       onClick={this.handleSettings}
                                       textClass={"d-none d-md-block col-10"}>
                                Settings
                            </CustomBtn>
                        </Col>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Dashboard;