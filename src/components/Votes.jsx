import React from 'react';
import PropTypes from 'prop-types';

class Votes extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      upVotes: 0,
      downVotes: 0,
      totalVotes: 0
    }
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  voteUp(){
    let newUpVotes = this.state.upVotes;
    let newTotalVotes = this.state.totalVotes;
    newUpVotes++;
    newTotalVotes++;
    this.setState({upVotes: newUpVotes});
    this.setState({totalVotes: newTotalVotes});
  }

  voteDown(){
    let newDownVotes = this.state.downVotes;
    let newTotalVotes = this.state.totalVotes;
    newDownVotes++;
    newTotalVotes--;
    this.setState({downVotes: newDownVotes});
    this.setState({totalVotes: newTotalVotes});
  }


  render() {
    return (
      <div>
        <div><strong>Up Votes</strong> {this.state.upVotes} <button onClick={this.voteUp}>Vote Up</button></div>
        <div><strong>Down Votes</strong> {this.state.downVotes} <button onClick={this.voteDown}>Vote Down</button></div>
        <div><strong>Total</strong> {this.state.totalVotes}</div>
      </div>
    );
  }
}

// Votes.propTypes = {
//   upVotes: PropTypes.number,
//   downVotes: PropTypes.number,
//   totalVotes: PropTypes.number,
// };

export default Votes;
