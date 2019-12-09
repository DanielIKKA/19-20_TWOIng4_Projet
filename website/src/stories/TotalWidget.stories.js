import React, { Component } from "react";
import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import TotalWidget from "../javascript/components/TotalWidget"
import index from "../index"


  storiesOf('Components/TotalWidget', module)
  .add('Dark mode', () => <TotalWidget xs={4}/>)
  .add('Light mode', () => <TotalWidget xs={4}/>)