import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Contact from "./components/Contact";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header brand="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
              <Route exact path="/about/:value" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

// Exaample with no Context API impl

/*
return (
    <div className="App">
      <Header brand="Contact Manager" />
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
*/
