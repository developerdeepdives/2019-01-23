import React, { Component } from 'react';
import classes from './Layout.module.css';
import RecentPosts from '../../Components/RecentPosts/RecentPosts';
import FullPost from '../../Components/FullPost/FullPost';
import NewPost from '../../Components/NewPost/NewPost';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

class Layout extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }

  handleSelectPost = postId => {
    this.setState({
      selectedPost: postId
    });
  }

  handleAddPost = newPost => {
    const posts = this.state.posts.slice();
    posts.push(newPost);
    this.setState({
      posts
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className={classes.Layout}>
          <Navbar />
          {/*<RecentPosts
            handleSelectPost={this.handleSelectPost}
            posts={this.state.posts} 
          />
          <FullPost selectedPost={this.state.selectedPost} handleSelectPost={this.handleSelectPost}/>
          <NewPost handleAddPost={this.handleAddPost} posts={this.state.posts} /> */}
          <Route path="/" exact component={RecentPosts} />
          <Route path="/create-post/" component={NewPost}/>
          <Route path="/full-post/:postId" component={FullPost}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;

// import Layout from '../Layout/Layout';