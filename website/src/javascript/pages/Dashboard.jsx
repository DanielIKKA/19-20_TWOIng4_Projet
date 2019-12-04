import React, { Component } from 'react'
import Header from '../components/Header'
import {Col, Container} from "react-bootstrap";
import CustomBtn from "../components/CustomBtn"
import LastWidget from "../components/LastWidget"


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
                <Container fluid={true} id={'dashboard-wrapper'} className={'dashboard-content'}>
                    <Col id={"header-dashB-wrapper"} className={"d-flex"}>

                        <Col id={'titles'} xs={9} className={"my-5 p-0"}>
                            <h1 className={"fw-800 mb-0"}>Dashboard</h1>
                            <h2 className={"fw-200 mt-0 t-size-1-3"}>Welcome to the Domotics Management Panel</h2>
                        </Col>

                        <Col id={'btn'} className={"d-flex justify-content-end align-items-center px-0"}>
                            <CustomBtn xs={8} sm={6} md={9} lg={8} xl={6}
                                       mode={mode} icon={"settings"} text={"Settings"}
                                       onClick={this.handleSettings}
                                       textClass={"d-none d-md-block col-10"}>
                                Settings
                            </CustomBtn>
                        </Col>
                    </Col>
                    <Col>
                        <LastWidget xs={6} md={4}
                                    mode={mode} value={"35%"} iconName={"invert_colors"}
                                    darkBG={'rgb(218,83,103,0.5)'} lightBG={'rgb(218,83,103,1)'}
                        />
                        <LastWidget xs={6} md={4}
                                    mode={mode} value={"35%"} iconName={"invert_colors"}
                                    darkBG={'rgb(229,183,82,0.5)'} lightBG={'rgb(229,183,82,1)'}
                        />
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Dashboard;