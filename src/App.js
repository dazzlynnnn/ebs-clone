import React from 'react';
import styled from "styled-components";
import pengsu from "./assets/pengsu.png";
import search from "./assets/search.png";
import search_ad from "./assets/search_ad.png";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const Header = styled.div`
  background-color: #5981bb;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  height:50px;
`

const Center = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:15px;
  align-items: center;
`

const Input = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:white;
  margin-left: 15px;
  width:850px;
  height:60px;
  border:5px solid #5981bb;
  outline: none;
`

const InputConsol = styled.input`
  border: 1px solid white;
  width: 800px;
  margin-left: 15px;
  outline: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:50px;
  //정렬 필요
`

const ImgCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 220px 220px 220px 220px;
	grid-template-rows: 170px 170px 170px;
`

const ImgCard = styled.button`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 5px 10px 0px rgba(97,97,97,0.25);
  height:150px;
  width: 200px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    background-color: gray;
  }
`


function App() {
  return (
    <Wrapper>
      <Header>

      </Header>
      <Center>
        <img src={pengsu} width='550px' alt='pengsu'/>
        <InputWrapper>
        <img src={search_ad} width='110px' height='50px' alt='search_ad'/>
        <Input>
          <InputConsol placeholder="ⓔ-Pick) EBS에서 가장 핫한 콘텐츠"/>
          <img src={search} alt='search' style={{margin:"10px"}}/>
        </Input>
        </InputWrapper>
        <Container>
          <ImgCardWrapper>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>

          </ImgCardWrapper>
        </Container>
      </Center>
      {/* <Footer>

      </Footer> */}
    </Wrapper>
  );
}

export default App;
