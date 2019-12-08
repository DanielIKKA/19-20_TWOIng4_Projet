import React, { Component } from "react";
import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import CustomBtn from "../javascript/components/CustomBtn"
import index from "../index"

storiesOf('Components/CustomBtn', module)
  .add('Dark mode', () => <CustomBtn xs={8} sm={6} md={9} lg={8} xl={6}
        mode={true} icon={"settings"} text={"Settings"}
        onClick={action("clicked")}
        textClass={"d-none d-md-block col-10"}>
            
    </CustomBtn>)
  .add('Light mode', () => <CustomBtn xs={8} sm={6} md={9} lg={8} xl={6}
        mode={false} icon={"settings"} text={"Settings"}
        onClick={action("clicked")}
        textClass={"d-none d-md-block col-10"}>

</CustomBtn>)
