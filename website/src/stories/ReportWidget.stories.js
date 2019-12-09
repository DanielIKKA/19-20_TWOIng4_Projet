import React, { Component } from "react";
import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import ReportWidget from "../javascript/components/ReportWidget"
import index from "../index"

storiesOf('Components/ReportWidget', module)
  .add('Dark mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <ReportWidget xs={{span:12, order: 5}} md={6} lg={5} xl={4}  mode={true}/>
  </div>)
  .add('Light mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <ReportWidget xs={{span:12, order: 5}} md={6} lg={5} xl={4}  mode={false}/>
</div>)