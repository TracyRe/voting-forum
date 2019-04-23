import React from 'react';
import Header from './Header';
import PostList from './PostList';
import Error404 from './Error404';
import Form from './Form';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      masterPostList: []
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  handleAddingNewPost(newPost) {
    const newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.unshift(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <PostList postList={this.state.masterPostList}/>} />
          <Route path='/makepost' render={() => <Form onNewPostCreation={this.handleAddingNewPost}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
