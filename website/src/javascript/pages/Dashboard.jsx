import React, { Component } from 'react'
import Header from '../components/Header'
import {Row} from "react-bootstrap";

const light = {
    backgroundColor : "white"
};

const dark = {
    backgroundColor : 'black'
};

class Dashboard extends Component {
    render() {

        const {onSwitch, mode, onRefresh} = this.props;

        return (
            <div id={'main-wrapper'} style={mode ? dark : light}>
                <Header mode={mode} onSwitch={onSwitch} onRefresh={onRefresh}/>
                <Row className={'dashboard-content'}>

                </Row>
            </div>
        );
    }
}

export default Dashboard;