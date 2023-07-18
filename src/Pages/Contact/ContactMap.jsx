import React from 'react'
import styled from "styled-components"

export const ContactMap = () => {
  return (
    <Section>
      <iframe className="gmap_canvas"
        src="https://maps.google.com/maps?q=Ikeja lagos&t=&z=10&ie=UTF8&iwloc=&output=embed" 
        frameborder="0"
      >
      </iframe>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .gmap_canvas{
    width: 90%;
    height: 70%;
  }
`