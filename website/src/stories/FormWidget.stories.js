import React, { Component } from "react";
import {storiesOf} from "@storybook/react"
import FormWidget from "../javascript/components/FormWidget"
import index from "../index"

storiesOf('Components/FormWidget', module)
  .add('default', () => <FormWidget mode={true}/>)