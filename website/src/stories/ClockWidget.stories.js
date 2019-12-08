import React from "react";
import {storiesOf} from "@storybook/react"
import ClockWidget from "../javascript/components/ClockWidget"
import index from "../index"

  storiesOf('Components/ClockWidget', module)
  .add('Dark mode', () => <ClockWidget xs={6} md={3} mode={true} darkCol = "green"/>)
  .add('Light mode', () => <ClockWidget xs={6} md={3} mode={false}/>)
