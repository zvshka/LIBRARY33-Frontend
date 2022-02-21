import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import CreatePG from "./pages/CreatePG";
import BookInfo from "./components/BookInfo";
import Signing from "./pages/Signing";
import Profile from "./pages/Profile";
import LoggingIn from "./pages/LoggingIn";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/books" component={Books} />
            <Route exact path="/create_PG" component={CreatePG} />
            <Route path="/books/:id" component={BookInfo} />
            <Route exact path="/signing" component={Signing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/loggingin" component={LoggingIn} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
