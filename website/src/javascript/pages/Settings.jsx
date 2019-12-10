import React, {Component} from "react";
import Header from "../components/Header";
import {Col} from "react-bootstrap";
import TotalWidget from "../components/TotalWidget";
import FormWidget from "../components/FormWidget";
import TabSettingsWidget from "../components/TabSettingsWidget";
import {Route, Switch} from "react-router-dom";
import ApiManager from "../models/ApiManager";
import {EventEmitter} from "events";


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
let emitter = new EventEmitter();
let EVENT_DELETED = 'deleted';

class Fetcher {
    manager = new ApiManager();

    deleteUser(user) {
        this.manager.deleteOneUser(user)
            .then(response => {
                emitter.emit(EVENT_DELETED);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
    deleteSensor(sensor) {
        this.manager.deleteOneSensor(sensor)
            .then(response => {
                emitter.emit(EVENT_DELETED);
            })
            .catch(err => {
                console.error('pb', err);
            })
    }
}

class Settings extends Component {

    isMount = false;
    fetcher = new Fetcher();

    constructor(props) {
        super(props);

        this.state = {
            waiting : true
        }
    }

    handleDelete = (data) => {
        const {pathname} = window.location;

        pathname === '/settings/sensors' ? this.fetcher.deleteSensor(data)
            : this.fetcher.deleteUser(data);
    };

    componentDidMount() {
        this.isMount = true;
        emitter.on(EVENT_DELETED, () => {
            if(this.isMount) {
                this.setState({waiting : false});
            }
        });
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {
        const {mode, onSwitch} = this.props;
        return (
            <div id={'main-wrapper'} style={mode ? styles.dark : styles.light}>
                <Header mode={mode} onSwitch={onSwitch} onSearch={this.onSearch}/>
                <Col id={'dashboard-wrapper'} className={'d-flex row dashboard-content p-5 mt-5 mx-0'}>
                    <TotalWidget xs={4} md={4} type={"clients"}
                                 mode={mode}
                                 linkTo={'/settings/clients'}/>
                    <TotalWidget xs={4} md={4} type={"sensors"}
                                 mode={mode}
                                 linkTo={'/settings/sensors'}/>
                    <TotalWidget xs={4} md={4} type={"measures"}
                                 mode={mode}
                    />
                </Col>
                <Switch>
                    <Route path={'/settings/:attr'} render={(props) => <TabSettingsWidget {...props} onDelete={this.handleDelete} mode={this.props.mode}/>}/>
                </Switch>
            </div>
        );
    }
}

export default Settings;