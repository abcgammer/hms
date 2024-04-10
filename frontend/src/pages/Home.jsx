import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'


const Home = () => {
  return (
    <>
<Hero
 title={"Welcome to BN Medical Institute."} imageUrl={"./hero.png"} />
    <Biography imageUrl={"./about.png"} />
    <Departments/>  
    <MessageForm/>
    
    </>
  )
}

export default Home