import React from 'react'
import { Link } from 'gatsby'

import { Timeline } from 'react-twitter-widgets'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello there!</h1>
    <p>I'm looking forward to participate in <a href="https://hackathon.freecodecamp.org/">freeCodeCamp JAMstack Hackathon</a>.</p>
    <p><a href="‎https://twitter.com/jamstackconf">@jamstackconf</a> twitter feed below👇</p>
    <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'jamstackconf'
    }}
    options={{
      username: 'jamstackconf',
      height: '600',
      width: '300'
    }}
  />
  </Layout>
)

export default IndexPage
