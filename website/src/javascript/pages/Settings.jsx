import React, {Component} from "react";
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import TotalWidget from "../components/TotalWidget";
import Modal from "../components/Modal/index";
import Popup from "react-popup";
import ReactDom from 'react-dom';

ReactDom.render(
    <Popup />,
    document.getElementById('popupContainer')
);

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
                <Container fluid={true} id={'dashboard-wrapper'} className={'dashboard-content p-5 mt-5'}>
                    <TotalWidget xs={4}/>
                </Container>
                <div>
                    {Popup.alert('I am alert, nice to meet you')}
                </div>
            </div>
        );
    }
}

export default Settings;