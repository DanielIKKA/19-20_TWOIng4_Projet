import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {SquareLoader} from "./SpinLoader";

class Fetcher {

}

const type = ['users', 'sensors', 'measures'];

class TotalWidget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            waiting: true
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
                    <h1 className={'fw-300'}>Clients</h1>
                    {this.state.waiting ? this.squareLoader() : <h1>Cool</h1>}
                </Col>
            </Col>
        )
    }
}

export default TotalWidget;