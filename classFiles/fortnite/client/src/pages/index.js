import React, { Component } from 'react'

import FormComponent from './../components/form'
import ResultsComp from './../components/results'
import './index.css'

class IndexPage extends Component {
  state = {
    isError: false,
    platform: '',
    username: '',
    stats: {},
  }

  getInitialState = () => ({
    isError: false,
    platform: 'pc',
    username: '',
  })

  handleNameChange = e => {
    this.setState({
      username: e.target.value,
    })
  }

  handlePlatformChange = e => {
    this.setState({
      platform: e.target.value,
    })
  }

  fetchRequest = async e => {
    const { platform, username } = this.state
    this.setState({
      isError: false,
    })
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:8080/stats?platform=${platform}&username=${username}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      const json = await response.json()
      this.setState({
        stats: json,
      })
      return
    } catch (e) {
      this.setState({
        stats: {},
        isError: true,
      })
      console.error(e)
    }
  }

  render() {
    return (
      <div>
        <h1>Finding Scrubs in Fortnite</h1>
        <h4>Think you're good? Find out.</h4>
        <FormComponent
          platform={this.state.platform}
          username={this.state.username}
          handleNameChange={this.handleNameChange}
          fetchRequest={this.fetchRequest}
          handlePlatformChange={this.handlePlatformChange}
        />
        <ResultsComp stats={this.state.stats} />
      </div>
    )
  }
}

export default IndexPage
