import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./login/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path="/sign-in" component={Login}/>
            </Switch>
        </Router>
    );
}

export default App;
