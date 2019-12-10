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
            waiting: false
        }
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
                                <td><input type="text" id="pays" name="user_pays"/></td>
                            </tr>
                            <tr>
                                <td><label for="personInHouse">nombre de Personne :</label></td>
                                <td><input type="text" id="personInHouse" name="user_personInHouse"/></td>
                            </tr>
                            <tr>
                                <td><label for="HouseSize">House Size :</label></td>
                                <td><input type="text" id="HouseSize" name="user_HouseSize"/></td>
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