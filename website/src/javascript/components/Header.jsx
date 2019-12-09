import React , {Component} from 'react'
import {Col} from 'react-bootstrap'
import Switch from 'react-switch';
import CustomBtn from "./CustomBtn";

const Style = {
    backgroundColor : "#212940",
    color : "white"
};

const InputStyle = {
    backgroundColor : "#434C67",
    color : "#DDDD"
};

const BtnStyles = {
    light : {
        fontSize : "0.85rem",
        backgroundColor : 'rgba(0,0,0,0)',
        color : "white",
        borderRadius : '100%',
        border : 'none',
        boxShadow : 'none'
    },
    dark : {
        fontSize : "0.85rem",
        backgroundColor : 'rgba(0,0,0,0)',
        color : "white",
        borderRadius : '100%',
        border : 'none',
        boxShadow : 'none'
    }
};

class Header extends Component {

    backHome() {
        return(<CustomBtn iconName={'home'}
                          className={"p-0 mx-2 mx-lg-1"}
                          xs={2}
                          icon={'home'}
                          iconAlign={'text-right'}
                          linkTo={'/'}
                          styleLight={BtnStyles.light} styleDark={BtnStyles.dark}
        />)
    }

    render() {
        const {onSwitch, mode, onRefresh, onSearch} = this.props;

        return (
            <Col id={"header-wrapper"}
                 as={"header"}
                 style={Style}
                 className={"d-flex justify-content-end align-content-center p-1 fixed-top"}>

                {this.backHome()}
                <Col id={"search-input-wrapper"}
                     xs={7} md={{span:5, offset:4}} lg={3}
                     className={"d-sm-flex align-items-center m-0 d-none"}>
                    <CustomBtn onClick={onSearch}
                               xs={3}
                               className={"p-0 mx-2 mx-lg-1"}
                               icon={'search'}
                               styleLight={BtnStyles.light} styleDark={BtnStyles.dark}
                    />
                    <Col as={'input'} type={'text'}
                           placeholder={'Search a widget'}
                           className={"rounded-pill border-0 py-2 px-4 fw-300 t-size-0-9"}
                           style={InputStyle}
                    />
                </Col>

                <Col id={"switch-wrapper"}
                     xs={4} sm={1}
                     className={"d-flex align-items-center justify-content-center"}>
                    <Switch onChange={onSwitch} checked={mode}
                            checkedIcon={false} uncheckedIcon={false}
                            handleDiameter={20} width={54} height={10}
                            onColor={"#45A196"} onHandleColor={"#FBB2F3"}
                            className={"align-self"}
                    />
                </Col>

                <CustomBtn xs={2} sm={1}
                           icon={"refresh"} styleLight={BtnStyles.light} styleDark={BtnStyles.dark}
                           onClick={onRefresh} iconSize={"t-size-1-8"} iconAlign={"text-justify"}
                />

            </Col>
        );    
    }
}

export default Header;