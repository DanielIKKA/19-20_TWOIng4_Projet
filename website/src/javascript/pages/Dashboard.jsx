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

    onSearch() {
        console.log("onSearch");
    }

    handleRefresh() {
        console.log('on refresh');
    }

    render() {

        const {onSwitch, mode} = this.props;

        return (
            <div id={'main-wrapper'} style={mode ? dark : light}>
                <Header mode={mode} onSwitch={onSwitch} onRefresh={this.handleRefresh} onSearch={this.onSearch}/>
                <Row className={'dashboard-content'}>

                </Row>
            </div>
        );
    }
}

export default Dashboard;