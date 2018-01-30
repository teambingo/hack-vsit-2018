import React, { Component } from "react";
import { Pie, PieChart, AreaChart, Area } from "recharts";
import logo from "./logo.svg";
import "./App.css";
const DATA = [
  { name: "Group A", value: 237, fill: "rgb(100,212,249)" },
  { name: "Group B", value: 56, fill: "rgb(250,107,91)" }
];
const dd = [
  { name: "Page A", uv: 5000, pv: 3800, amt: 2400 },
  { name: "Page B", uv: 1000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2000, pv: 2000, amt: 2500 },
];
const DEDE = [
  {
    "faceAttributes": {
      "gender": "male",
      "hair": {
        "invisible": false,
        "bald": 0.07,
        "hairColor": [
          { "confidence": 1.0, "color": "black" },
          { "confidence": 0.44, "color": "other" },
          { "confidence": 0.39, "color": "brown" },
          { "confidence": 0.3, "color": "gray" },
          { "confidence": 0.2, "color": "red" },
          { "confidence": 0.04, "color": "blond" }
        ]
      },
      "makeup": { "eyeMakeup": false, "lipMakeup": false },
      "headPose": { "roll": 3.4, "yaw": -4.0, "pitch": 0.0 },
      "noise": { "value": 0.49, "noiseLevel": "medium" },
      "occlusion": {
        "eyeOccluded": false,
        "mouthOccluded": false,
        "foreheadOccluded": false
      },
      "glasses": "ReadingGlasses",
      "facialHair": { "moustache": 0.3, "beard": 0.2, "sideburns": 0.0 },
      "blur": { "value": 0.0, "blurLevel": "low" },
      "exposure": { "value": 0.0, "exposureLevel": "underExposure" },
      "age": 26.9,
      "smile": 0.0,
      "emotion": {
        "contempt": 0.001,
        "happiness": 0.0,
        "disgust": 0.0,
        "neutral": 0.996,
        "anger": 0.0,
        "sadness": 0.002,
        "fear": 0.0,
        "surprise": 0.0
      },
      "accessories": [{ "confidence": 1.0, "type": "glasses" }]
    },
    "faceRectangle": { "height": 175, "left": 357, "width": 175, "top": 254 },
    "faceId": "b059eb65-e476-4344-9206-a8a6d8368043"
  },
  {
    "faceAttributes": {
      "gender": "male",
      "hair": {
        "invisible": false,
        "bald": 0.01,
        "hairColor": [
          { "confidence": 1.0, "color": "black" },
          { "confidence": 0.53, "color": "other" },
          { "confidence": 0.31, "color": "brown" },
          { "confidence": 0.16, "color": "red" },
          { "confidence": 0.09, "color": "gray" },
          { "confidence": 0.03, "color": "blond" }
        ]
      },
      "makeup": { "eyeMakeup": false, "lipMakeup": false },
      "headPose": { "roll": -15.4, "yaw": -13.9, "pitch": 0.0 },
      "noise": { "value": 1.0, "noiseLevel": "high" },
      "occlusion": {
        "eyeOccluded": false,
        "mouthOccluded": false,
        "foreheadOccluded": false
      },
      "glasses": "ReadingGlasses",
      "facialHair": { "moustache": 0.0, "beard": 0.0, "sideburns": 0.0 },
      "blur": { "value": 0.0, "blurLevel": "low" },
      "exposure": { "value": 0.17, "exposureLevel": "underExposure" },
      "age": 15.3,
      "smile": 0.007,
      "emotion": {
        "contempt": 0.002,
        "happiness": 0.007,
        "disgust": 0.005,
        "neutral": 0.943,
        "anger": 0.006,
        "sadness": 0.026,
        "fear": 0.002,
        "surprise": 0.01
      },
      "accessories": [{ "confidence": 0.96, "type": "glasses" }]
    },
    "faceRectangle": { "height": 41, "left": 649, "width": 41, "top": 322 },
    "faceId": "ddef6455-232f-4494-a158-d02d89e6579a"
  }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="demographs">
          <div className="emotions">
            <div className="header">
              <h1>Emotions</h1>
            </div>
            <div className="content-seven">
              <div className="item1">
                <div className="emoji">😁</div>
                <div className="fill-happy" />
              </div>
              <div className="item2">
                <div className="emoji">😕</div>
                <div className="fill-happy" />
              </div>
              <div className="item3">
                <div className="emoji">😯</div>
                <div className="fill-happy" />
              </div>
              <div className="item4">
                <div className="emoji">😡</div>
                <div className="fill-anger" />
              </div>
              <div className="item5">
                <div className="emoji">😨</div>
                <div className="fill-happy" />
              </div>
              <div className="item6">
                <div className="emoji">😊</div>
                <div className="fill-happy" />
              </div>
              <div className="item7">
                <div className="emoji">🤩</div>
                <div className="fill-exiting" />
              </div>
            </div>
          </div>

          <div className="gender">
            <div className="header">
              <h1>Gender</h1>
            </div>
            <div className="content-gender">
              <div className="male">
                <h3>M</h3>
                <h1> 237</h1>
              </div>

              <div>
                <PieChart width={283} height={210}>
                  <Pie
                    data={DATA}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    fill="rgb(250,107,91)"
                    label
                  />
                </PieChart>
              </div>
              <div className="female">
                <h3>F</h3>
                <h1> 56</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="views">
          <div className="header">
            <h1>Views</h1>
          </div>
          <div className="content-seven days">
          <div className="lol" >
            <AreaChart

              style={{position:'absolute'}}
            width={1435}
              height={220}
              data={dd}

            >
              <Area type="monotone" dataKey="uv" stroke="rgb(235,196,75)" fill="rgb(235,196,75)" />
            </AreaChart>
            </div>
            <div className="monday">
              <h1>Monday</h1>

              <h3>
                {" "}
                <span style={{ color: "green" }}>+</span> 43
              </h3>
            </div>
            <div className="tuesday">
              <h1>Tuesday</h1>
              <h3>
                {" "}
                <span style={{ color: "green" }}>+</span> 43
              </h3>
            </div>
            <div className="wednesday">
              <h1>Wednesday</h1>
              <h3>
                {" "}
                <span style={{ color: "green" }}>+</span> 43
              </h3>
            </div>
            <div className="thursday">
              <h1>Thursday</h1>
              <h3>
                {" "}
                <span style={{ color: "green" }}>+</span> 43
              </h3>
            </div>
            <div className="friday">
              <h1>Friday</h1>
              <h3>
                {" "}
                <span style={{ color: "green" }}>+</span> 43
              </h3>
            </div>
            <div className="saturday">
              <h1>Saturday</h1>
              <h3>
                {" "}
                <span style={{ color: "green" }}>+</span> 43
              </h3>
            </div>
            <div className="sunday">
              <h1>Sunday</h1>
              <h3>
                {" "}
                <span style={{ color: "green" }}>+</span> 43
              </h3>
            </div>

          </div>
        </div>

        <div className="cards">
          <div className="header">
            <h1>Demographs</h1>
          </div>
          <div className="content-seven">
            <div className="item1"> </div>
            <div className="item2" />
            <div className="item3" />
            <div className="item4" />
            <div className="item5" />
            <div className="item6" />
            <div className="item7" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
