import styled from "styled-components";

export const Section = styled.section`
  width: 75%;
  height:max-height;
  background-color:White;
  .top{
    margin: 50px 50px 50px 50px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:var(--Primary-color);
    background-color: var(--White-color);
  }
  .topRight{
    display: flex;
    width:30%;
    justify-content: space-around;
    align-items: center;
    select{
      width:60%;
      height:30px;
      background-color:var(--Primary-color);
      color:var(--White-color);
      border: none;
      border-radius:5px;
    } 
  }
  .jobCardContainer{
    background-color:var(--White-color);
    padding:0 50px 50px 50px;
    display: grid;
    grid-gap:50px;
  }
  .jobCard{
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    width:100%; 
    height:150px;
    justify-self: center;
    padding:20px;
    background-color:var(--White-color);
    border-radius:5px;
    box-shadow: 4px 4px 4px 4px #2323231F;
  }
  .jobCardFirst{
    height:100px;
    width:100px;
    background-color:var(--White-color);
    display: grid;
    align-items: center;
    align-self: center;
  }
  .jobImg{
    height:80%;
    width:100%;
  }
  .jobCardSecond{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .jobCardSecond>h3{
    grid-column:1/4;
    color:rgb(40,57,90);
    font-size:1.5em;
  }
  .jobCardSecond>p{
    color:#808080;
    font-size:1.2em;
  }
  .jobCardLocation{
    display: flex;
    color:#808080;
    font-size:1.1em;
  }
  .jobCardThird{
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  .jobCardButton{
    height:40px;
    width:140px;
    background-color:var(--Primary-color);
    border-radius:20px;
    color:var(--White-color);
    border:none;
  }
  .jobCardButton:hover{
    border:1.5px solid var(--Primary-color);
    border-radius:20px;
    background-color:var(--White-color);
    color:var(--Primary-color);
  }
  .jobCardThird>p{
    justify-self:center;
    color:#808080;
  }
  .pagination-container {
    display: flex;
    justify-content: center;
    align-self: flex-end;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    .topRight {
      width: 50%;
    }
    .jobCard{
      display: grid;
      grid-template-columns: 1fr;
      height:350px;
      grid-row-gap:1em;
    }
    .jobCardSecond>p{
      font-size:0.8em;
    }
    .jobCardLocation{
      font-size:0.8em;
    }
    .jobCardButton{
      width:120px;
    }
    .jobCardThird>p{
      justify-self:start;
      margin:10px 0 0 10px;
    }
    .jobCardFirst{
      height:80px;
      width:80px;
    .jobCardSecond>h3{
      font-size:1em;
    }
    .jobCardSecond>p{
      color:#808080;
      font-size:1em;
    }
  }
  @media screen and (max-width: 426px) {
    width: 100%;
    .top{
      font-size:0.6em;
      height: 50px;
      padding:10px 0 0 20px;
      margin:0;
    }
    .jobCard{
      padding:0 0 0 40px;
    }
    .jobCardContainer{
      padding:10px 20px 0 20px;
      margin-bottom:20px;
    }
    .jobCardSecond>h3{
      font-size:1em;
    }
    .jobCardLocation{
      grid-column:2/4;
    }
  }
}
`