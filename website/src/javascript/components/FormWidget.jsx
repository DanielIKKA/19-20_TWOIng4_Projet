import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {SquareLoader} from "./SpinLoader";

class Fetcher {

}

const type = ['users', 'sensors', 'measures'];

class FormWidget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            waiting: false,
            valuePays: "",
            valuePersonInHouse: 0,
            valueHouseSize: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({valuePays: event.target.value});
    }
    handleChange1(event) {
        this.setState({valuePersonInHouse: event.target.value});
    }
    handleChange2(event) {
        this.setState({valueHouseSize: event.target.value});
    }

    squareLoader() {
        const {mode} = this.props;
        return(<SquareLoader mode={mode} bgLight={'#DA5367'} bgDark={'#78BEFF'}/>);
    }

    render() {
        const {xs, sm, md, xl, lg} = this.props;

        return(
            <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}
                 id={'total-widget-wrapper'}
                 className={'my-3'}
            >
                <Col id={'total-widget'}
                     className={'p-3 shadow-shorter text-center'}
                     style={{height: 200}}
                >
                    <form action="#" method="post">
                        <table>
                            <tr>
                                <td><label for="pays">Pays :</label></td>
                                <td><input type="text" value={this.state.valuePays} onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label for="personInHouse">nombre de Personne :</label></td>
                                <td><input type="text" value={this.state.valuePersonInHouse} onChange={this.handleChange1}/></td>
                            </tr>
                            <tr>
                                <td><label for="HouseSize">House Size :</label></td>
                                <td><input type="text" value={this.state.valueHouseSize} onChange={this.handleChange2}/></td>
                            </tr>
                        </table>
                        <tr>
                            <button>Inscription</button>
                        </tr>
                    </form>
                </Col>
            </Col>
        )
    }
}
export default FormWidget;