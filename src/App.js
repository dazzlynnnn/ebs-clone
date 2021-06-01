/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import pengsu from "./assets/pengsu.png";
import search from "./assets/search.png";
import search_ad from "./assets/search_ad.png";
import menu from "./assets/menu.png";
import epick from "./assets/epick.png";
import logo from "./assets/logo.png";
import cost_center from "./assets/cost_center.png";
import bn_footer from "./assets/bn_footer.png";
import adban from "./assets/adban.png";
import ImgCard from "./components/ImgCard";
import Card from "./components/Card";

const Header1 = styled.div`
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  height:47px;
`
const Header2 = styled.div`
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  height:93px;
`
const Button1 = styled.button`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF; 
  background-color:#4E81C0;
  border: none;
`
const Button2 = styled.button`
  align-self: flex-end;
  margin-left: 12px;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF; 
  font-weight: 550;
  background-color:#4E81C0;
  border: none;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
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
    grid-template-rows: 180px 180px 180px;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
	grid-template-rows: 95px 95px 95px 95px 95px 95px;
`


const Navigation = styled.div`
  background-color: #e0e0e0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
`

const Menu = styled.a`
  background-color: #e0e0e0;
  border-radius: 30px;
  height:40px;
  width: 160px;
  outline: none;
  border: 1px solid lightgray;
  align-items: center;
  :active{
    background-color: blue;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
`

const Footer = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`
const Button3 = styled.button`
  align-self: flex-start;
  margin-left: 13px;
  margin-top: 31px;
  font-size: 11px;
  line-height: 15px;
  color: #111111;
  background-color: #FFFFFF;
  border: none;
`
const Button4 = styled.button`
  align-self: flex-start;
  margin-left: 13px;
  margin-top: 31px;
  font-size: 11px;
  font-weight: bold;
  line-height: 15px;
  color: #111111;
  background-color: #FFFFFF;
  border: none;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCards: [{link:"http://ebs.co.kr", tag:"초등"}, {link:"http://ebs.co.kr", tag:"ebs"}],
      cards: [{link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}, {link:"http://ebs.co.kr", name:"초등"}]
    }
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }

  render() {
    const {imgCards, cards} = this.state;
    return(
      <Wrapper>

        <Header1>
          <Button1 style = {{marginLeft: '120px'}}><img src={menu} alt='menu'/></Button1>
          <Button1>장애인 서비스</Button1>
          <Button1>두리안(다문화)</Button1>
          <Button1 style = {{marginLeft: "735px"}}>로그인</Button1>
          <Button1 style>마이페이지</Button1>
          <Button1>고객센터</Button1>
          <Button1>연간권</Button1>
        </Header1>

        <Header2>
          <Button2 style = {{marginLeft: "120px"}}>TV</Button2>
          <Button2>라디오</Button2>
          <Button2>뉴스</Button2>
          <Button2><img src={epick} alt="epick"/></Button2>
          <Button2 style={{marginLeft: "280px"}}><img src={logo} alt="logo"/></Button2>
          <Button2 style={{marginLeft: "310px"}}>구독하기</Button2>
          <Button2>이벤트</Button2>
          <Button2>편성표</Button2>
        </Header2>

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
              {imgCards.map(card => (
                <ImgCard
                  link={card.link}
                  tag={card.tag}
                />
              ))}
            </ImgCardWrapper>
            <CardWrapper>
              {cards.map(card => (
                <Card
                  link={card.link}
                  name={card.name}
                />
              ))}
            </CardWrapper>
          </Container>

          <img src={adban} width='920px' height='100px' alt='adban'></img>
        </Center>

        <Navigation>

          <Wrapper>

          </Wrapper>
          <Wrapper>
            
          </Wrapper>
          <Wrapper>
              <LinkWrapper>
                <Menu> EBS 앱 </Menu>
                <Menu></Menu>
                <Menu></Menu>
              </LinkWrapper>
              <img></img>
          </Wrapper>
          <img></img>

        </Navigation>

        <Footer height="58px">
          <Button4 style = {{marginLeft: '115px'}}>EBS 소개</Button4>
          <Button3>EBS 공고</Button3>
          <Button3>저작권 침해 제보</Button3>
          <Button3>EBS클린신고</Button3>
          <Button4>제휴문의</Button4>
          <Button4>협찬/광고문의</Button4>
          <Button3>이용약관</Button3>
          <Button4 style = {{color: '#4E81C0'}}>개인정보처리방침</Button4>
          <Button3>청소년 보호정책</Button3>
          <Button3>원천징수 영수증 발급</Button3>
          <img src={bn_footer} alt='bn_footer' width='136px' height='80px' style={{marginLeft: '25px', marginTop: '10px'}}></img>
          <img src={cost_center} alt='cost_center' width='136px' height='80px' style={{marginLeft: '20px', marginTop: '12px'}}></img>
        </Footer>
        <Footer height="27px">
          <a style = {{marginTop: '12px', marginLeft: '115px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF',fontWeight: 'bold' }}>10393 &nbsp;</a>
          <a style = {{marginTop: '12px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>경기도 고양시 일산동구 한류월드로 281 &nbsp;한국교육방송공사 
           &nbsp; 사업자등록번호 : 229-82-01343 (한국교육방송공사사장 김명중) </a>
        </Footer>
        <Footer height="27px">
          <a style = {{marginLeft: '115px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>시청자불만전담 :</a>
          <a style = {{fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF', fontWeight: 'bold' }}>&nbsp;hotline@ebs.co.kr </a>
          <a style = {{fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>&emsp; 부가통신사업신고 : 10077 통신판매업신고 : 
          고양일산동-1415호 [사업자정보확인]</a>
        </Footer>
        <Footer height="27px">
          <a style = {{marginLeft: '115px', marginBottom: '20px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>Copyright ⓒ EBS. All Rights Reserved. </a>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
