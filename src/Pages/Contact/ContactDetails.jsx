import React from 'react';
import styled from "styled-components"
import { AiOutlineHome, AiOutlineMail,AiOutlinePhone } from "react-icons/ai";

export const ContactDetails = () => {
  return (
    <Section>
      <div className="detailsLeft">
        <h3>Get in touch</h3>
        <textarea placeholder="Enter Message"className="textArea"></textarea>
        <div className="double">
          <input 
           className="name"
           type="text"
           placeholder="Enter Your Name"
          />
          <input
           className="email" 
           type="email"
           placeholder="Enter Your Email"
          />
        </div>
        <input 
         className="subject"
         type="text"
         placeholder="Enter Subject"
        />
        <button type="submit" className="submit">
          SEND
        </button>
      </div>
      <div className="detailsRight">
        <div className="rightFirst">
          <AiOutlineHome className="detailsIcon"/>
          <div className="para">
            <p>Lagos, Nigeria</p> <br/>
            <p>1, Tech Jobs street, Ikeja</p>
          </div>
        </div>
        <div className="rightSecond">
          <AiOutlinePhone className="detailsIcon"/>
          <div className="para">
            <p>+2348000000001</p> <br/>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>
        <div className="rightSecond">
          <AiOutlineMail className="detailsIcon"/>
          <div className="para">
            <p>support@tjob.com</p> <br/>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  height: max-height;
  padding:5%;
  display: flex;
  background-color:var(--Primary-color);
  justify-content:space-between;

  .detailsLeft{
    width: 65%;
    h3{
      color:var(--White-color);
      font-size:2em;
    }
    .textArea{
      width:100%;
      height:200px;
      margin:20px 0;
      border:none;
      border-radius:5px;
    }
    .double{
      justify-content:space-between;
      width:100%;
    }
    .name{
      width:47.5%;
      height:50px;
      margin-right:5%;
      border:none;
      border-radius:5px;
    }
    .email{
      width:47.5%;
      height:50px;
      border:none;
      border-radius:5px;
    }
    .subject{
      width:100%;
      height:50px;
      margin:20px 0;
      border:none;
      border-radius:5px;
    }
    .name::placeholder, .email::placeholder, .subject::placeholder{
      padding-left:10px;
    }
    .submit{
      width:150px;
      height:60px;
      border:1px solid var(--White-color);
      border-radius:5px;
      background-color: var(--primary-color);
      color:var(--White-color);
      font-size:1.2em;
      margin:20px 0 ;
    }
    .submit:hover{
      border:none;
      border-radius:5px;
      background-color:var(--White-color);
      color: var(--primary-color);
      font-size:1.2em;  
    }
  }
  .detailsRight{
    width: 25%;
    margin-top:90px;
    align-items: center;
    justify-content:space-around;
    .rightFirst{
      display: flex;
      justify-content: flex-start;
      height:20%;
    }
    .rightSecond{
      display: flex;
      justify-content: flex-start;
      height:20%;
    }
    .rightThird{
      display: flex;
      justify-content: flex-start;
      height:20%;
    }
    .detailsIcon{
      color:var(--White-color);
      font-size:50px;
      margin-right:10px;
    }
    .para{
      color:var(--White-color);
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .detailsLeft{
      width: 100%;
    }
    .detailsRight{
      width: 100%;
      margin-top:20px;
      .rightThird, .rightFirst, .rightSecond,{
        margin-bottom:40px;
      }
    }
  }
  @media screen and (max-width: 426px) {
    .double{
      display:flex;
      flex-direction:column;
    }
    .detailsLeft{
      .name, .email{
        width:100%;
        margin:15px 0;
      }
    }
  }
`