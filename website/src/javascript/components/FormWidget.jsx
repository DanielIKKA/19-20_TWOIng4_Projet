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
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});

        console.log(nam);
        console.log(val);
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.valuePays + " " + this.state.valuePersonInHouse + " " + this.state.valueHouseSize);
        event.preventDefault();
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
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tr>
                                <td><label for="pays">Pays :</label></td>
                                <td><input type="text"  name="valuePays" onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label for="personInHouse">nombre de Personne :</label></td>
                                <td><input type="text" name="valuePersonInHouse" onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label for="HouseSize">House Size :</label></td>
                                <td><input type="text" name="valueHouseSize" onChange={this.handleChange}/></td>
                            </tr>
                        </table>
                        <tr>
                            <input type='Submit' />
                        </tr>
                    </form>
                </Col>
            </Col>
        )
    }
}
export default FormWidget;