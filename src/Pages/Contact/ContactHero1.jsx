import React from 'react'
import  contact2  from "../../Assets/contact2.jpg"
import styled from "styled-components"

export const ContactHero1 = () => {
  return (
    <Section>
      <div ><p className='ghj'>Contact Us</p></div>
    </Section>
  )
}
const Section = styled.section`
background: linear-gradient(rgb(9, 9, 9, 0.1), rgb(64, 139, 220, 0.8)), url(${contact2});
width: 100%;
overflow:hidden;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
text-align:center;
height:100vh;
`