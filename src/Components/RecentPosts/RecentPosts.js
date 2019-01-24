import React, { Component } from 'react';
import classes from './RecentPosts.module.css';
import Posts from './Posts/Posts';
import axios from '../../axios';


class RecentPosts extends Component {
  
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const manipulatedData = response.data
          .slice(0, 10)
          .map(post => {
            post.author = 'Tyler Schum'
            return post;
          })
        this.setState({
          posts: manipulatedData
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          posts: []
        });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className={classes.RecentPosts}>
        <h3 className={classes.Title}>Recent Posts</h3>
        <Posts posts={posts} />
      </div>
    );
  }
}

export default RecentPosts;