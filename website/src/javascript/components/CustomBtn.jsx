import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";


class CustomBtn extends Component {
    styles = {
        light : {
            fontSize : "0.85rem",
            fontWeight : 400,
            backgroundColor : "#646ECD",
            color : "white",
            borderRadius : '0.2em',
            border : 'none'
        },
        dark : {
            fontSize : "0.85rem",
            fontWeight : 400,
            backgroundColor : '#272F45',
            color : "white",
            borderRadius : '0.2em',
            border : 'none'
        }
    };

    linked() {
        const {mode, xs, sm, md,lg, xl, text, icon, iconSize, textClass, iconAlign,
            styleLight, styleDark, linkTo} = this.props;

        if (styleLight) this.styles.light = styleLight;
        if (styleDark) this.styles.dark = styleDark;

        return (
            <Col id={'btn-wrapper-'+icon} xs={xs} sm={sm} md={md} lg={lg} xl={xl}
                 as={'button'}
                 className={"d-flex align-items-center p-3 shadow-shorter"} style={mode ? this.styles.dark : this.styles.light}
            >
                    <Link as={'i'}
                          to={linkTo}
                          className={"material-icons mx-1 p-0 col text-reset text-decoration-none" +
                         (iconAlign ? ` ${iconAlign}` : " text-center") + ` ${iconSize}` }>{icon}</Link>
                    <Link as={'div'} to={linkTo}
                          className={(text ? textClass :"d-none") + " text-reset text-decoration-none"}
                    >
                        {text}
                    </Link>
            </Col>
        );
    }

    unLiked() {
        const {mode, xs, sm, md,lg, xl, text, icon, iconSize, textClass, iconAlign,
            styleLight, styleDark} = this.props;

        if (styleLight) this.styles.light = styleLight;
        if (styleDark) this.styles.dark = styleDark;

        return (
            <Col id={'btn-wrapper-'+icon} xs={xs} sm={sm} md={md} lg={lg} xl={xl}
                 as={'button'}
                 className={"d-flex align-items-center p-3 shadow-shorter"} style={mode ? this.styles.dark : this.styles.light}
            >
                <Col as={'i'}
                     className={"material-icons mx-1 p-0" +
                     (iconAlign ? ` ${iconAlign}` : " text-center") + ` ${iconSize}` }>{icon}</Col>
                <Col className={text ? textClass :"d-none"}>{text}</Col>
            </Col>
        );
    }

    render() {
        const {linkTo} = this.props;
        return(
            linkTo ? this.linked() : this.unLiked()
        );
    }
}

export default CustomBtn;