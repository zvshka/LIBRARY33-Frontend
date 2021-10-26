import Layout from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';

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
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
