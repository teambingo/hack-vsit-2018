import React, { Component } from "react";
import { Pie, PieChart, AreaChart, Area } from "recharts";
import firebase from 'firebase';
import logo from "./logo.svg";
import "./App.css";
const DATA = [
  { name: "Group A", value: 164, fill: "rgb(100,212,249)" },
  { name: "Group B", value: 36, fill: "rgb(250,107,91)" }
];
const dd = [
  { name: "Page A", uv: 500, pv: 3800, amt: 2400 },
  { name: "Page B", uv: 100, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 200, pv: 2000, amt: 2500 },
  { name: "Page g", uv: 200, pv: 2000, amt: 2500 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }
 componentWillMount() {
  const config = {
    apiKey: "AIzaSyCOmubrc3gEd6LOW5UfRH5LVaL-GFgRCgk",
    authDomain: "not-so-awesome-project-45a2e.firebaseapp.com",
    databaseURL: "https://not-so-awesome-project-45a2e.firebaseio.com",
    projectId: "not-so-awesome-project-45a2e",
    storageBucket: "not-so-awesome-project-45a2e.appspot.com",
    messagingSenderId: "481329884022"
};
  firebase.initializeApp(config);
  var ref  = firebase.database().ref('/vsit/data')
  ref.limitToLast(1).on('child_added',(snapshot)=>{

    this.setState({
      data:snapshot.val()
    })
    })

 }



  render() {
    { console.log(this.state.data)}
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
                <div className="fill-happy" style={{height:`${this.state.data['emotions'] ? (this.state.data['emotions'].happiness* 150):(0)}px`}} />
              </div>
              <div className="item2">
                <div className="emoji">😕</div>
                <div className="fill-happy" style={{height:`${this.state.data['emotions'] ? (this.state.data['emotions'].sadness* 150):(0)}px`}} />
              </div>
              <div className="item3">
                <div className="emoji">😯</div>
                <div className="fill-happy" style={{height:`${this.state.data['emotions'] ? (this.state.data['emotions'].contempt* 150):(0)}px`}} />
              </div>
              <div className="item4">
                <div className="emoji">😡</div>
                <div className="fill-happy"  style={{height:`${this.state.data['emotions'] ? (this.state.data['emotions'].anger* 150):(0)}px`}}/>
              </div>
              <div className="item5">
                <div className="emoji">😨</div>
                <div className="fill-happy" style={{height:`${this.state.data['emotions'] ? (this.state.data['emotions'].fear* 150):(0)}px`}} />
              </div>
              <div className="item6">
                <div className="emoji"  >😐</div>
                <div className="fill-happy" style={{height:`${this.state.data['emotions'] ? (this.state.data['emotions'].neutral* 150):(0)}px`}} />
              </div>
              <div className="item7">
                <div className="emoji">🤩</div>
                <div className="fill-happy" style={{height:`${this.state.data['emotions'] ? (this.state.data['emotions'].surprise* 150):(0)}px`}} />
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
                <h1> {DATA[0].value}</h1>
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
                <h1> {DATA[1].value}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="views">
          <div className="header">
            <h1>Visitors</h1>
          </div>
          <div className="content-seven days">
            <div className="lol">
              <AreaChart
                style={{ position: "absolute" }}
                width={1435}
                height={220}
                data={dd}
              >
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="rgb(235,196,75)"
                  fill="rgb(235,196,75)"
                />
              </AreaChart>
            </div>
            <div className="monday day">
              <h1>Monday</h1>

              <h3> {dd[0].uv}</h3>
            </div>
            <div className="tuesday day">
              <h1>Tuesday</h1>
              <h3> {dd[1].uv}</h3>
            </div>
            <div className="wednesday day">
              <h1>Wednesday</h1>
              <h3> {dd[2].uv}</h3>
            </div>
            <div className="thursday day">
              <h1>Thursday</h1>
              <h3> {dd[3].uv}</h3>
            </div>
            <div className="friday day">
              <h1>Friday</h1>
              <h3> {dd[4].uv}</h3>
            </div>
            <div className="saturday day">
              <h1>Saturday</h1>
              <h3> {dd[5].uv}</h3>
            </div>
            <div className="sunday day">
              <h1>Sunday</h1>
              <h3> {dd[6].uv}</h3>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="header">
            <h1>Demographs</h1>
          </div>
          <div className="content-seven">
            <div className="card hot-section">
              <h5>Hot Section</h5>
              <h1> {this.state.data['shelf'] ? (this.state.data['shelf']): "Middle"}</h1>
            </div>
            <div className="card currentstocks">
              <h5>Stock Left</h5>
              <h1> 50%</h1>
            </div>
            <div className="card currentViewrs">
              <h5>People</h5>
              <h1>{this.state.data['person'] ? (this.state.data['person']): 68}</h1>
            </div>
            <div className="card currentSexRation">
              <h5>Sex Ratio(m:f)</h5>
              <h1>5:1 </h1>
            </div>
            <div className="card avgage">
              <h5>Average Age</h5>
              <h1>{Math.floor(this.state.data['age']?(this.state.data['age']) : 25)} </h1>
            </div>
            <div className="card activetime">
              <h5>Hot Time</h5>
              <h1> 6:00pm</h1>
            </div>
            <div className="card hotProduct">
              <h5>Hot Producs</h5>
              <h1>Pepsi</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
