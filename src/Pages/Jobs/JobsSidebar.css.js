import styled from "styled-components";

export const JobsSideBarContainer = styled.section`
    width:25%;
    height:max-height;
    background-color: var(--Primary-color);
    display: flex;
    flex-direction: column;
    .filter{
        display: flex;
        align-items: center;
        margin:50px 0 0 30px;
        color:var(--White-color);
    }
    section{
        margin:30px 30px 30px 30px;
        border: 0.5px solid var(--White-color);
        color:var(--White-color);
        display: flex;
        flex-direction: column;
        padding: 0 0 1em 1em;
        h2{
            margin:30px 0 20px 0;
        }
        select{
            width:90%;
            height:30px;
            border: 0.5px solid var(--White-color);
        } 
        //styles for all checkboxes (line 37 - line 67)
        .custom-checkbox {
            position: relative;
            display: inline-block;
            cursor: pointer;
            user-select: none;
            padding-left: 25px;
            // margin-bottom:10px;
        }  
        .custom-checkbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }  
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            background-color: var(--White-color);
        }
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        .custom-checkbox input:checked ~ .checkmark:after {
            display: block;
        }
        .custom-checkbox .checkmark:after {
            left: 6px;
            top: 3px;
            width: 5px;
            height: 10px;
            border: solid var(--Primary-color);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }         
    }
    .applyFilter{
        width: 50%;
        height: 50px;
        align-self: center;
        background-color:var(--White-color);
        border:none;
    }
    @media screen and (max-width: 768px) {
        width: 30%;
        .applyFilter{
            margin:0 0 30px 0;
        }
    }
    @media screen and (max-width: 426px) {
        width: 100%;
    }
`