import React from 'react';
import { v4 } from 'uuid';


function Form(props){
  let _title = null;
  let _post = null;

  function makePost(event)  {
    event.preventDefault()
    props.onNewPostCreation({title: _title.value, post: _post.value, id: v4()});
  }


    return (
      <div>
        <style jsx >{`
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
        <form onSubmit={makePost} className='formStyle'>
          <input type='text' placeholder='Title' ref={(input) => {_title = input;}} />
          <textarea ref={(textarea) => {_post = textarea;}}></textarea>
          <button type='submit'>Submit Post</button>
        </form>
      </div>
    );
}

export default Form;


//ref={(textarea) => {_post = textarea;}}

//ref={(input) => {_title = input;} }

//let _title = null;
//let _post = null;
