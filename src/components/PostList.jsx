import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

export const PostList = ({ isPosting,  onStopPosting}) => {

  return (
    <>
      {isPosting && 
      (<Modal onClose={onStopPosting}>
        <NewPost 
          onCancel={onStopPosting}
        />
      </Modal> 
      )}

      <ul className={classes.posts}>
        <li><Post author="Manuel" body="Check out the full course"/></li>
      </ul>
    </>  
  );
};

export default PostList;