import React, { Component } from "react";
import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import ReportWidget from "../javascript/components/ReportWidget"
import index from "../index"

storiesOf('Components/ReportWidget', module)
  .add('Dark mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <ReportWidget xs={8} sm={6} md={9} lg={8} xl={6}
        mode={true} icon={"settings"} text={"Settings"}
        onClick={action("clicked")}
        textClass={"d-none d-md-block col-10"}>
            
    </ReportWidget>
  </div>)
  .add('Light mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <ReportWidget xs={8} sm={6} md={9} lg={8} xl={6}
        mode={false} icon={"settings"} text={"Settings"}
        onClick={action("clicked")}
        textClass={"d-none d-md-block col-10"}>

</ReportWidget>
</div>)