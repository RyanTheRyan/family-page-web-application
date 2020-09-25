import React, { Component } from 'react'
import Axios from 'axios';
import moment from 'moment'

export default class newBlog extends Component {
  constructor(props) {
      super(props)

      this.state = {
          title: "",
          banner_image_url: "",
          content: "",
          status: null,
          published_date: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.buildForm = this.buildForm.bind(this)
  }

  buildForm() {
    let formData = {"title" : this.state.title, "content" : this.state.content, "banner_image_url" : this.state.banner_image_url, "status" : this.state.status, "published_date" : this.state.published_date}

    return formData;
}

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

componentWillMount() {
    let date = moment().format('DD/MM/YYYY')
    this.setState({
        published_date: date
    })
}

handleSubmit(event){
    Axios({
        method: 'post',
        url: 'https://lowe-family-api.herokuapp.com/new-blog',
        data: this.buildForm()
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
}

  render() {
      return (
          <div>
              <h1 id="header-form">Create a Blog Post</h1>
              <form onSubmit={this.handleSubmit}>
                  <div className="new-blog-input-wrapper">
                      <div className="input">
                        <input type="text" name="title" placeholder="Blog Title" value={this.state.title} onChange={this.handleChange} required/>
                      </div>
                      <div className="input">
                        <input type="url" name="banner_image_url" placeholder="Feature Image URL" value={this.state.banner_image_url} onChange={this.handleChange} required/>
                      </div>
                      <div className="input">
                        <textarea type="text" name="content" placeholder="Blog Content" value={this.state.content} onChange={this.handleChange} required/>
                      </div>
                  </div>
                  <div className="button-wrapper">
                      <button className="btn" type="submit">Create</button>
                  </div>
              </form>
          </div>
      )
  }
}