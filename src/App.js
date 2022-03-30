import {Switch, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import './App.css';
import {logo} from "../src/assets/logo.png";

function App() {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/subreddit/:subredditId">
          <Subreddit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
