import React, { Component } from 'react'
import axios from 'axios'
import BlogItem from "../blog/blog-item"

export default class Blog extends Component {
  constructor(props) {
      super(props)

      this.state = {
          blogItems: []
      }
  }

  componentDidMount() {
    axios.get('https://lowe-family-api.herokuapp.com/blogs'
    ).then(response => {
      console.log(response)
      this.setState({
        blogItems: this.state.blogItems.concat(
          response.data["blog posts"])
      })
    }).catch(error => {
      console.log("ERROR!", error)
    })
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem blogItem={blogItem} />
    })
      return (
          <div>
            <div className="blog-page-header">
              <h1>Family News & Blogs</h1>
              <hr />
            </div>
              <div className="content-container">
                {blogRecords}
              </div> 
          </div>
      )
  }
}