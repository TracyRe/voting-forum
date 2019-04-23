import React from 'react';
import PropTypes from 'prop-types';

function Votes(props){
  let upVotes = props.upVotes;
  let downVotes = props.downVotes;
  let totalVotes = props.totalVotes;

  function voteUp(){
    upVotes++;
    totalVotes++;
  }

  function voteDown(){
    downVotes++;
    totalVotes--;
  }



  return (
    <div>
      <div><strong>Up Votes</strong> {upVotes} <button onClick={voteUp}>Vote Up</button></div>
      <div><strong>Down Votes</strong> {downVotes} <button onClick={voteDown}>Vote Down</button></div>
      <div><strong>Total</strong> {totalVotes}</div>
    </div>
  );
}

Votes.propTypes = {
  upVotes: PropTypes.number,
  downVotes: PropTypes.number,
  totalVotes: PropTypes.number,
};

export default Votes;
