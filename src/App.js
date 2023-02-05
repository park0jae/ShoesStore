import axios from 'axios';
import { useState } from 'react';
import { Col, Container, Nav, Navbar, NavLink, Row } from 'react-bootstrap';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import data from './data.js';
import Detail from './pages/Detail.js';
import Cart from './pages/Cart.js';
import React from 'react';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';


function App() {

  let [shoes,setShoes] = useState(data);
  let [click , setClick] = useState(2);
  let navigate = useNavigate();
  let get_local = JSON.parse(localStorage.getItem('watched'));

  let result = useQuery(['result'], async () => {
    const a = await axios.get('https://codingapple1.github.io/userdata.json');
    return a.data;
  });

  useEffect(()=>{
    get_local !== null ? <></> : localStorage.setItem('watched',JSON.stringify([]))
  },[])
  

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container className = "barList">
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
          </Nav>
          <Nav className ="me-auto">
            {result.isLoading && '로딩중'}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div>
            <div className="main-bg"></div>
            {/* <div className='recentProduct'>
              <div className="recent">최근 본 상품 목록입니다.</div>
              {
                get_local !== null ? get_local.map((a,i)=>{
                  let target = shoes.findIndex((e)=>{
                    return e.id === get_local[i]
                  })
                  return (
                    <div>
                      <p>{shoes[target].title}</p>
                    </div>
                  )
                }) : <></>
              }  
            
            </div> */}
          </div>
          <Container>
            <Row>
            {
                  shoes.map(function(value,i){
                  return (
                      <>
                      <Product navigate ={navigate} key = {i} shoes={shoes[i]} id = {i}>
                      </Product>
                      {
                        (i + 1) % 3 === 0 ? <p></p> : null
                      }
                      </>
                  )
                  })
            }
            </Row>
          </Container>
          <button onClick={()=>{
            click === 2 ?
            axios.get("https://codingapple1.github.io/shop/data2.json")
            .then((data)=>{
              // let copy = shoes.concat(data.data);
              let copy = [...shoes, ...data.data];
              setShoes(copy);
              })
            .catch(()=>{console.log('실패함 ㅅㄱ')}) : <></>;
            
            click === 3 ?
            axios.get("https://codingapple1.github.io/shop/data3.json")
            .then((data)=>{
              // let copy = shoes.concat(data.data);
              let copy = [...shoes, ...data.data];
              setShoes(copy);
              })
            .catch(()=>{console.log('실패함 ㅅㄱ')}) : <></>;
            
            setClick(click + 1);
            
          }}>더보기</button>
          </>
        }/>
        <Route path="/detail/:id" element={
            <Detail shoes={shoes}></Detail>
        }/>
        <Route path ="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}


function Product(props){
  return (
    <Col sm>
            <img onClick={()=>{
              props.navigate('/detail/' + props.shoes.id)
            }} src ={"https://codingapple1.github.io/shop/shoes" + `${props.id + 1}` + ".jpg"} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}원</p>
    </Col>
  )
  
}

export default App