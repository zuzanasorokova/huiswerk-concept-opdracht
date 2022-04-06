import {Switch, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import './App.css';


function App() {
  return (
    <div>
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
