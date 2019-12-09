import React, { Component } from "react";
import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import Dashboard from "../javascript/pages/Dashboard"
import index from "../index"

storiesOf('Dashboard', module)
  .add('Dark Mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <Dashboard mode={true}
        onSwitch={action("onSwitch")}
    />
    </div>)
  .add('Light Mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <Dashboard mode={false}
        onSwitch={action("onSwitch")}
    />
  </div>)