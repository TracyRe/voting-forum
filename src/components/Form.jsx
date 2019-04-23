import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function Form(props){
  let _title = null;
  let _post = null;


  function handleNewPost(event)  {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, post: _post.value, upVotes: 0, downVotes: 0, totalVotes: 0, id: v4()});
    _title.value = '';
    _post.value = '';
  }


  return (
    <div>
      <style jsx> {`
          .formStyle {
            display: flex;
            flex-flow: column nowrap;
            width: 40vw;
          }

          .formStyle > * {
            margin-bottom: .5rem;
          }

          button {
            width: 150px;
            align-self: flex-start;
          }

          textarea {
            height: 15vw;
          }

        `}
      </style>
      <h1>Tell it like it is</h1>
      <form onSubmit={handleNewPost} className='formStyle'>
        <input type='text' placeholder='Title' ref={(input) => {_title = input;}} />
        <textarea ref={(textarea) => {_post = textarea;}}></textarea>
        <button type='submit'>Submit Post</button>
      </form>
    </div>
  );
}


Form.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default Form;


//ref={(textarea) => {_post = textarea;}}

//ref={(input) => {_title = input;} }

//let _title = null;
//let _post = null;
