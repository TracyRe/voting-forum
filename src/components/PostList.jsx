import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function PostList(props){


// let posts = [
//   {
//     header: 'Dog won\'t stop barking',
//     content: 'How can I humanely make my dog stop barking???'
//   },
//   {
//     header: 'I need to come up with another name for this!!',
//     content: 'I am so confused?!?!?!'
//   },
//   {
//     header: 'Where am I????',
//     content: 'Who are you people?!?!'
//   }
// ];




  return (
    <div>
      <h1>Vote on these posts</h1>
      {props.postList.map((post, index) =>
        <Post header={post.title}
          content={post.post}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
          totalVotes={post.totalVotes}
          key={post.id}/>)}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;
