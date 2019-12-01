import React , {Component} from 'react'
import { Col } from 'react-bootstrap'
import Switch from 'react-switch';

const Style = {
    backgroundColor : "#212940",
    color : "white"
};
const InputStyle = {
    backgroundColor : "#434C67",
    color : "#DDDD"
};

class Header extends Component {
    render() {
        const {onSwitch, mode, onRefresh, onSearch} = this.props;

        return (
            <Col id={"header-wrapper"}
                 as={"header"}
                 style={Style}
                 className={"d-flex justify-content-end align-content-center px-0 py-3"}>

                <Col id={"search-input-wrapper"}
                     xs={6} md={4} lg={3}
                     className={"d-sm-flex align-items-center m-0 d-none"}>
                    <Col as={'i'} xs={1}
                         onClick={onSearch}
                         className={"material-icons p-0 mx-2 mx-lg-1 text-center"}>search</Col>
                    <Col as={'input'} type={'text'}
                           placeholder={'Search a widget'}
                           className={"rounded-pill border-0 px-4"}
                           style={InputStyle}
                    />
                </Col>

                <Col id={"switch-wrapper"}
                     xs={4} sm={2} lg={1}
                     className={"d-flex align-items-center justify-content-center"}>
                    <Switch onChange={onSwitch} checked={mode}
                            checkedIcon={false} uncheckedIcon={false}
                            handleDiameter={20} width={54} height={10}
                            onColor={"#45A196"} onHandleColor={"#FBB2F3"}
                            className={"align-self"}
                    />
                </Col>

                <Col as={'i'}
                     xs={2} sm={1}
                     id={"refresh"}
                     className={"material-icons p-1 align-self-center text-white"}
                     onClick={onRefresh}>
                    refresh
                </Col>

            </Col>
        );    
    }
}

export default Header;