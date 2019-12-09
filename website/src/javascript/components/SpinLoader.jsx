import React from "react";
import '../../stylesheets/components/SpinLoader.css'

//from https://tobiasahlin.com/spinkit/
export const SpinLoader = props => {
    return (
      <div style={{height : '100%', position: "relative"}}>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
      </div>
    );
};

export const SquareLoader = props => {

    const {mode, bgLight, bgDark} = props;

    const style = {
        backgroundColor : mode ? bgDark : bgLight
    };

    return (
        <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1 shadow-shorter" style={style}/>
            <div className="sk-cube sk-cube2 shadow-shorter" style={style}/>
            <div className="sk-cube sk-cube3 shadow-shorter" style={style}/>
            <div className="sk-cube sk-cube4 shadow-shorter" style={style}/>
            <div className="sk-cube sk-cube5 shadow-shorter" style={style}/>
            <div className="sk-cube sk-cube6 shadow-shorter" style={style}/>
            <div className="sk-cube sk-cube7 shadow-shorter" style={style}/>
            <div className="sk-cube sk-cube8 shadow-shorter" style={style}/>
            <div className="sk-cube sk-cube9 shadow-shorter" style={style}/>
        </div>
    )
};