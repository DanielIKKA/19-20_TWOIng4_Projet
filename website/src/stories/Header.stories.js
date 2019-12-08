import React, { Component } from "react";
import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import Header from "../javascript/components/Header"
import index from "../index"

storiesOf('Header', module)
  .add('Light Mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <Header mode={true} onSwitch={action("onSwitch")} onRefresh={action("onRefresh")} onSearch={action("onSearch")}/>
  </div>)
  .add('Dark Mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <Header mode={false} onSwitch={action("onSwitch")} onRefresh={action("onRefresh")} onSearch={action("onSearch")}/>
  </div>)