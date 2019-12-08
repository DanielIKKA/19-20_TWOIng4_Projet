import React from "react";
import {storiesOf} from "@storybook/react"
import LastWidget from "../javascript/components/LastWidget"
import index from "../index"

  storiesOf('Components/LastWidget', module)
  .add('Temperature Dark mode', () => 
  (<div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <LastWidget xs={6} md={3}
    mode={true} value={"35%"} iconName={"access_time"}
    darkBG={'rgb(218,83,103,0.5)'} lightBG={'rgb(218,83,103,1)'}
   />
   </div>))
  .add('Temperature Light mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  <LastWidget xs={6} md={3}
    mode={false} value={"35%"} iconName={"access_time"}
    darkBG={'rgb(218,83,103,0.5)'} lightBG={'rgb(218,83,103,1)'}
   />
   </div>)
  .add('Humidity Dark mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  <LastWidget xs={6} md={3}
    mode={true} value={"35%"} iconName={"invert_colors"}
    darkBG={'rgb(229,183,82,0.5)'} lightBG={'rgb(229,183,82,1)'}
   />
   </div>)
  .add('Humidity Light mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  <LastWidget xs={6} md={3}
    mode={false} value={"35%"} iconName={"invert_colors"}
    darkBG={'rgb(229,183,82,0.5)'} lightBG={'rgb(229,183,82,1)'}
   />
   </div>)
  .add('Air pollution Dark mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  <LastWidget xs={6} md={3}
  mode={true} value={"35%"} iconName={"access_time"}
  darkBG={'rgb(100,110,205,0.5)'} lightBG={'rgb(100,110,205,1)'}
 />
 </div>)
  .add('Air pollution Light mode', () => 
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  <LastWidget xs={6} md={3}
    mode={false} value={"35%"} iconName={"access_time"}
    darkBG={'rgb(100,110,205,0.5)'} lightBG={'rgb(100,110,205,1)'}
   />
   </div>)