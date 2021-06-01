import React from "react";
import styled from "styled-components";

const CardContent = styled.a`
  background: #FFFFFF;
  border-radius: 10px;
  height:85px;
  width: 190px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 550;
  font-size: 18px;
  line-height: 25px;
  color: #55585c;
  text-decoration: none;
  :hover{
    background-color: #4E81C0;
    color: white;
    box-shadow: 0px 5px 10px 0px rgba(97,97,97,0.7);
  }
`

const Card = ({ link, name }) => {
  return (
    <CardContent href={link}>{name}</CardContent>
  )
}

export default Card