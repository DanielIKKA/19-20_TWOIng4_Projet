import React, { Component } from "react";
import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import CustomPieChart from "../javascript/components/CustomPieChart"
import index from "../index"

storiesOf('Components/CustomPieChart', module)
  .add('Dark mode waiting', () => <CustomPieChart 
    data = {{name : "france", value : 25, number: 25},
    {name : "UK", value : 25, number: 25},
    {name : "USA", value : 25, number: 25},
    {name : "Egypte", value : 25, number: 25}}
    mode={true} waiting={true}/>)

  .add('Dark mode', () => <CustomPieChart 
  data = {
    {name : "france", value : 25, number: 25},
    {name : "UK", value : 25, number: 25},
    {name : "USA", value : 25, number: 25},
    {name : "Egypte", value : 25, number: 25}}
  mode={true} waiting={false}/>)
  .add('Light mode waiting', () => <CustomPieChart 
  data = {
    {name : "france", value : 25, number: 25},
    {name : "UK", value : 25, number: 25},
    {name : "USA", value : 25, number: 25},
    {name : "Egypte", value : 25, number: 25}}
     mode={false} waiting={true}/>)
  .add('Light mode', () => <CustomPieChart 
  data = {
    {name : "france", value : 25, number: 25},
    {name : "UK", value : 25, number: 25},
    {name : "USA", value : 25, number: 25},
    {name : "Egypte", value : 25, number: 25}}
     mode={false} waiting={false}/>)