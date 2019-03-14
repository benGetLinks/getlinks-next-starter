import React from 'react'
import Head from './Head'
import Nav from './Nav'

export default ({ children }) => (
  <>
    <Head />
    <Nav />
    { children }
  </>
)