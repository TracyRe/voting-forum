import React from 'react';
import PropTypes from 'prop-types';
import Votes from './Votes';


function Post(props){



  return (
    <div style={{border: '1px solid #ccc'}}>

      <h1>{props.header}</h1>
      <p>{props.content}</p>
      <Votes upVotes={props.upVotes}
      downVotes={props.downVotes}
      totalVotes={props.totalVotes}/>
    </div>
  );
}

Post.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  upVotes: PropTypes.number,
  downVotes: PropTypes.number,
  totalVotes: PropTypes.number,
};



export default Post;
