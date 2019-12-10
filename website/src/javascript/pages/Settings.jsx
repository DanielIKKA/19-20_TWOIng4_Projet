import React, {Component} from "react";
import Header from "../components/Header";
import {Col} from "react-bootstrap";
import TotalWidget from "../components/TotalWidget";
import TabSettingsWidget from "../components/TabSettingsWidget";
import {Route, Switch} from "react-router-dom";


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
                <Col id={'dashboard-wrapper'} className={'d-flex row dashboard-content p-5 mt-5 mx-0'}>
                    <TotalWidget xs={4} md={4} type={"clients"} linkTo={'/settings/clients'}/>
                    <TotalWidget xs={4} md={4} type={"sensors"} linkTo={'/settings/sensors'}/>
                    <TotalWidget xs={4} md={4} type={"measures"}/>
                </Col>
                <Switch>
                    <Route path={'/settings/:attr'} component={TabSettingsWidget}/>
                </Switch>

            </div>
        );
    }
}

export default Settings;