import Layout from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import CreatePG from './pages/CreatePG';
import BookInfo from './components/BookInfo';
import Signing from './pages/Signing';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Books" component={Books} />
            <Route exact path="/Create_PG" component={CreatePG} />
            <Route path="/book/:id" component={BookInfo} />
            <Route exact path="/Signing" component={Signing} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
