import React from "react";
import styled from "styled-components";

const CardContent = styled.a`
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 5px 10px 0px rgba(97,97,97,0.25);
    height:160px;
    width: 200px;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    :hover{
        background-color: gray;
    }
`
const ImgCard = ({ link, tag }) => {
    return (
      <CardContent href={link}>{tag}</CardContent>
    )
  }

export default ImgCard