import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

export const PostList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');  

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }; 
  
  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {modalIsVisible && 
      (<Modal onClose={hideModalHandler}>
        <NewPost 
          onBodyChange={bodyChangeHandler} 
          onAuthorChange={authorChangeHandler}
        />
      </Modal> 
      )}

      <ul className={classes.posts}>
        <li><Post author={enteredAuthor} body={enteredBody}/></li>
        <li><Post author="Manuel" body="Check out the full course"/></li>
      </ul>
    </>  
  );
};

export default PostList;