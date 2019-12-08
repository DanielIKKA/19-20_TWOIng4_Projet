import React from "react";
import {storiesOf} from "@storybook/react"
import ClockWidget from "../javascript/components/ClockWidget"

export default {
    title : 'ClockWidget',
  };
  
  //export const clockWidget = () => <ClockWidget />;

  storiesOf('Components/ClockWidget', module)
  .add('default', () => <ClockWidget />)
