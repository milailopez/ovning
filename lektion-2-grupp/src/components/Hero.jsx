import React from 'react'
import Clock from './Clock'
import Counter from './Counter'
import Navigation from './Navigation'

const Hero = () => {
  return (
    <section className='hero'>
      <Navigation />
      <h1>Hi there!</h1>
      <Clock />
      <Counter />
    </section>
  )
}

export default Hero
