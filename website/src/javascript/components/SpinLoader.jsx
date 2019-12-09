import React from "react";
import '../../stylesheets/components/SpinLoader.css'

//from https://tobiasahlin.com/spinkit/
export const SpinLoader = props => {
    return (
      <div>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
      </div>
    );
};