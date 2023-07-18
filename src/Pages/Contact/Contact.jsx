import React from 'react';
import { ContactHero1 } from "../Contact/ContactHero1";
import { ContactMap } from "../Contact/ContactMap";
import { ContactDetails } from "../Contact/ContactDetails";

const Contact = () => {
  return (
    <div>
       <ContactHero1 />
       <ContactMap />
       <ContactDetails />
    </div>
  )
}

export default Contact