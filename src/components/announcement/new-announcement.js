import React, { Component } from 'react'
import Axios from 'axios';

export default class newAnnouncment extends Component {
  constructor(props) {
      super(props)

      this.state = {
          title: "",
          content: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.buildForm = this.buildForm.bind(this)
  }

  buildForm() {
    let formData = {"title" : this.state.title, "content" : this.state.content}

    return formData;
}

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit(event){
    Axios({
        method: 'post',
        url: 'https://lowe-family-api.herokuapp.com/new-announcement',
        data: this.buildForm()
    }).then(response => {
        console.log(response)
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
}

  render() {
      return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <div className="input-wrapper">
                      <input type="text" name="title" placeholder="Announcement Title" value={this.state.title} onChange={this.handleChange} />
                      <input type="text" name="content" placeholder="Announcement Content" value={this.state.content} onChange={this.handleChange} />
                  </div>
                  <div className="button-wrapper">
                      <button type="submit">Submit</button>
                  </div>
              </form>
          </div>
      )
  }
}