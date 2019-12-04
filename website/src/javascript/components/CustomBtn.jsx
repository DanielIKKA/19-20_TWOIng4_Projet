import React, {Component} from "react";
import {Col} from "react-bootstrap";

class CustomBtn extends Component {
    styles = {
        light : {
            fontSize : "0.85rem",
            fontWeight : 400,
            backgroundColor : "#646ECD",
            color : "white",
            borderRadius : '0.4em',
            border : 'none'
        },
        dark : {
            fontSize : "0.85rem",
            fontWeight : 400,
            backgroundColor : '#272F45',
            color : "white",
            borderRadius : '0.4em',
            border : 'none'
        }
    };

    render() {
        const {mode, xs, sm, md,lg, xl, text, icon, iconSize, textClass, onClick, iconAlign,
            styleLight, styleDark} = this.props;

        if (styleLight) this.styles.light = styleLight;
        if (styleDark) this.styles.dark = styleDark;

        return (
          <Col id={'btn-wrapper-'+icon} xs={xs} sm={sm} md={md} lg={lg} xl={xl}
               as={'button'}
               className={"d-flex align-items-center p-3"} style={mode ? this.styles.dark : this.styles.light}
               onClick={() => onClick(this)}>
              <Col as={'i'}
                   className={"material-icons mx-1 p-0" +
                   (iconAlign ? ` ${iconAlign}` : " text-center") + ` ${iconSize}` }>{icon}</Col>
              <Col className={text ? textClass :"d-none"}>{text}</Col>
          </Col>
        );
    }
}

export default CustomBtn;