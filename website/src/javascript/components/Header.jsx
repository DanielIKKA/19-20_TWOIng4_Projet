import React , {Component} from 'react'
import { Col} from 'react-bootstrap'
import Switch from 'react-switch';

const Style = {
    backgroundColor : "#212940",
    color : "white"
};

class Header extends Component {

    render() {

        const {onSwitch, mode, onRefresh} = this.props;

        return (
            <Col as={"header"}
                 style={Style}
                 className={"d-flex justify-content-end align-content-center py-3"}>
                <Col as={'input'}
                     xs={3}
                     className={"d-flex justify-content-end align-items-center m-0 rounded-pill border-0"}
                     type={'text'}
                />

                <Col xs={2} className={"d-flex align-items-center justify-content-end"}>
                    <Switch onChange={onSwitch}
                            checked={mode}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            width={54}
                            className={"align-self"}
                    />
                </Col>

                <Col as={'i'}
                     xs={1}
                     id={"refresh"}
                     className={"fas fa-redo-alt fa-2x p-1 align-self-center text-white col-1"}
                     onClick={onRefresh}/>
            </Col>
        );    
    }
}

export default Header;