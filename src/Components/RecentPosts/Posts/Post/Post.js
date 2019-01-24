import React from 'react';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const post = props => {
  return (
    <Link
      className={classes.Post}
      to={`/full-post/${props.id}`}
    >
      <article>
        <h1>
          {props.title}
        </h1>
        <div>
          <div className={classes.Author}>    {props.author}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default post;