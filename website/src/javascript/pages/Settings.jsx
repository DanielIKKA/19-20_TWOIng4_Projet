import React, {Component} from "react";
import Header from "../components/Header";
import {Col, Container, Row} from "react-bootstrap";
import TotalWidget from "../components/TotalWidget";
import TabWidget from "../components/TabWidget";

const styles = {
    light : {
        backgroundColor : "#EEEEEE",
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

class Settings extends Component {

    render() {
        const {onSwitch, mode} = this.props;

        return (
            <div id={'main-wrapper'} style={mode ? styles.dark : styles.light}>
                <Header mode={mode} onSwitch={onSwitch} onRefresh={this.handleRefresh} onSearch={this.onSearch}/>
                <Row fluid={true} id={'dashboard-wrapper'} className={'dashboard-content p-5 mt-5'}>
                    <TotalWidget xs={4} md={4} type={"clients"}/>
                    <TotalWidget xs={4} md={4} type={"sensors"}/>
                    <TotalWidget xs={4} md={4} type={"measures"}/>
                </Row>
                <Row id={"widgets-wrapper"}>
                    <TabWidget xs = {12} md = {12} type={"clients"}/>
                </Row>
            </div>
        );
    }
}

export default Settings;