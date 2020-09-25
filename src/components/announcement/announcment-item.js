import React, { Component } from 'react'
import axios from 'axios';

export default class Announcment extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
            content: '',
            title: '',
            isShown: true
        }
        this.disableAnnouncement = this.disableAnnouncement.bind(this)
    }
  componentDidMount() {
    axios.get('https://lowe-family-api.herokuapp.com/announcement'
    ).then(response => {
      console.log(response)
      console.log("title", response.data.announcement[0].title)
      console.log("content", response.data.announcement[0].content)
        this.setState({
            title: response.data.announcement[0].title,
            content: response.data.announcement[0].content
        })
        console.log(response)
    }).catch(error => {
      console.log("Announcements detail error", error)
    })
  }

  disableAnnouncement() {
    this.setState({
      isShown: false
    })
  }

  render() {
    if (this.state.isShown) {
      return (
          <div className="announcement-wrapper">
            <div className="disable">
              <a onClick={this.disableAnnouncement}>X</a>
            </div>
            <div className="announcement-content">
              <div className="title">{this.state.title}</div>
              <div className="content">{this.state.content}</div>
            </div>
          </div>
      )
    }
    return <div />
  }
}