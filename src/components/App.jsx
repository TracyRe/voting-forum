import React from 'react';
import Header from './Header';
import PostList from './PostList';
import Error404 from './Error404';
import MakePost from './MakePost';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={PostList}/>
          <Route path='/makepost' component={MakePost} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

  }

export default App;
