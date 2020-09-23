import React, { Component } from 'react'
import axios from 'axios';

export default class Announcment extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
            content: '',
            title: ''
        }
        
    }
  componentDidMount() {
    axios.get('http://localhost:5000/announcment'
    ).then(response => {
      console.log(response)
      console.log("title", response.data[0].title)
      console.log("content", response.data[0].content)
        this.setState({
            title: response.data[0].title,
            content: response.data[0].content
        })
        console.log(response)
    }).catch(error => {
      console.log("Announcements detail error", error)
    })
  }

  render() {
      return (
          <div className="announcement-wrapper">
              <div>{this.state.title}</div>
              <div>{this.state.content}</div>
          </div>
      )
  }
}