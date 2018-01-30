import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="demographs">
          <div className="emotions">
            <div className="header" >
            <h1>Emotions</h1>
            </div>
            <div className="content-seven" >
            <div className="item1" >
              <div className="emoji" >😁</div>
              <div className="fill-happy" ></div>

             </div>
            <div className="item2" >
            <div className="emoji" >😕</div>
              <div className="fill-happy" ></div>
            </div>
            <div className="item3" >

            <div className="emoji" >😯</div>
              <div className="fill-happy" ></div>
            </div>
            <div className="item4" >

            <div className="emoji" >😡</div>
              <div className="fill-happy" ></div>
            </div>
            <div className="item5" >
            <div className="emoji" >😨</div>
              <div className="fill-happy" ></div>
            </div>
            <div className="item6" >
            <div className="emoji" >😊</div>
              <div className="fill-happy" ></div>
            </div>
            <div className="item7" >

            <div className="emoji" >🤩</div>
              <div className="fill-exiting" ></div>
            </div>
            </div>
          </div>


          <div className="gender">
          <div className="header" >
            <h1>Gender</h1>
            </div>
            <div className="content-gender" >
            <div/>
            <div/>
            <div/>
            </div>
          </div>


        </div>
        <div className="views">
        <div className="header" >
            <h1>Views</h1>
            </div>
          <div className="content-seven" >
            <div className="item1" ></div>
            <div className="item2" ></div>
            <div className="item3" ></div>
            <div className="item4" ></div>
            <div className="item5" ></div>
            <div className="item6" ></div>
            <div className="item7" ></div>
            </div>
        </div>



        <div className="cards">
        <div className="header" >
            <h1>Demographs</h1>
            </div>
          <div className="content-seven" >
            <div className="item1" >  </div>
            <div className="item2" ></div>
            <div className="item3" ></div>
            <div className="item4" ></div>
            <div className="item5" ></div>
            <div className="item6" ></div>
            <div className="item7" ></div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
