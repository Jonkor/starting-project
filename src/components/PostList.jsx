import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

export const PostList = ({ isPosting,  onStopPosting}) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');  
  
  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {isPosting && 
      (<Modal onClose={onStopPosting}>
        <NewPost 
          onBodyChange={bodyChangeHandler} 
          onAuthorChange={authorChangeHandler}
          onCancel={onStopPosting}
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