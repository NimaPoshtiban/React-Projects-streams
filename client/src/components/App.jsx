import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import NotFound from './errors/NotFound';

import "../Styles.css"

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={StreamList} />
            <Route exact path="/streams/new" component={StreamCreate} />
            <Route exact path="/streams/edit" component={StreamEdit} />
            <Route exact path="/streams/delete" component={StreamDelete} />
            <Route exact path="/streams/show" component={StreamShow} />
            {/* Add other routes above this Route , This route is for handling 404 page*/}
            <Route exact path="*" component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
