// @ts-nocheck
import React from 'react';
import {useEffect, useState } from "react";
import { Nav } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import {addItem} from './../store.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Detail(props){

    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState(1);
    let [warn ,setWarn] = useState(false);
    let [tab, setTab] = useState(0);
    let navigate = useNavigate();
  
    let dispatch = useDispatch();
    let {id} = useParams();
   

    let product = props.shoes.find((e)=>{
        return e.id == id
    });

    useEffect(()=>{
        let get = localStorage.getItem('watched');
        {
            get === null ? localStorage.setItem('watched',JSON.stringify([])) :<></>
        }
    })
    
    useEffect(()=>{
        let 꺼낸거 = localStorage.getItem('watched')
        꺼낸거 = JSON.parse(꺼낸거)
        꺼낸거.push(product.id)
        //Set으로 바꿨다가 다시 array로 만들기
        꺼낸거 = new Set(꺼낸거)
        꺼낸거 = Array.from(꺼낸거)
        localStorage.setItem('watched', JSON.stringify(꺼낸거))
    }, [])

    useEffect(() => {
        let a = setTimeout(()=>{ setAlert(false) }, 2000);

        return () => {
            clearTimeout(a);
        }
    }, [])


    useEffect(()=>{

        isNaN(input) === true ? setWarn(true) : setWarn(false);
    
    }, [input])

    let [fade, setFade] = useState('');

    useEffect(()=>{
        setTimeout(()=> { setFade("end");}, 100);

        return () => {
            setFade('');
        }
    },[])


    return(
    <div className={"container start " + fade} >

        { alert === true ? 
        <div className="alert alert-warning">
            2초이내 구매시 할인
        </div> : null
        }
      
        <div className="row">
            <div className="col-md-6">
            <img src= {"https://codingapple1.github.io/shop/shoes" + `${product.id + 1}` + ".jpg"} width="100%" />
            </div>
            <div className="col-md-6">
            {
                warn === true ? 
                <div style={{'color': 'white' , 'backgroundColor':'red'}}> 경고 : 숫자만 입력하세요 ! </div> : null
            }
            <input onChange={(e)=>{
                setInput(e.target.value);
            }}></input> 
            <h4 className="pt-5">상품명 : {product.title}</h4>
            <p>상품설명 : {product.content}</p>
            <p>가격 : {product.price}</p>
            <button onClick ={()=>{
                let copy = {id : product.id , name : product.title , count : 1}
                dispatch(addItem(copy))
                navigate('/cart');
            }}className="btn btn-danger">주문하기</button> 
            </div>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
                <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{setTab(1)}}eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{setTab(2)}}eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        
        <TabContent tab ={tab}></TabContent>
    </div> 
    )
}

function TabContent(props){

    let [fade, setFade] = useState('');

    useEffect(()=>{
        setTimeout(()=> { setFade("end");}, 100);

        return () => {
            setFade('');
        }
    },[props.tab])

    return (
        <div className={'start ' + fade}>
          { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab] }
        </div>
      )
}




export default Detail;