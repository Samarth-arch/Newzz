import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

// import Spinner from './Components/Spinner';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const  App=()=> {
  const [progress, setProgress] = useState(0)

  return (
      <div>
        <Router>
          <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => this.setProgress(0)}s
          height={3}
        />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} key="general" pagesize={6} country="in" category="general" /></Route>
            <Route exact path="/Bussiness"><News setProgress={setProgress} key="Business" pagesize={6} country="in" category="Business" /></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} key="About" pagesize={6} country="in" category="entertainment" /></Route>
            <Route exact path="/Sports"><News setProgress={setProgress} key="Sports" pagesize={6} country="in" category="Sports" /></Route>
            <Route exact path="/Science"><News setProgress={setProgress} key="Science" pagesize={6} country="in" category="Science" /></Route>
            <Route exact path="/Health"><News setProgress={setProgress} key="Health" pagesize={6} country="in" category="Health" /></Route>
            <Route exact path="/Technology"><News setProgress={setProgress} key="Technology" pagesize={6} country="in" category="Technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  
}

export default App
