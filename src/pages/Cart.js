// @ts-nocheck
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useMemo } from 'react';
import {changeName, changeAge} from './../store/userSlice.js';
import {changeCount , delItem} from './../store.js';
import { useState } from 'react';



function  Cart() {


    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);

    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{
                dispatch(changeAge());
            }}>+</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>제거하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i )=>{
                            return(
                                <tr key = {i}>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td><button onClick={()=>{
                                        dispatch(changeCount(state.cart[i].id))
                                    }}>+</button></td>
                                    <td><button onClick={()=>{
                                        dispatch(delItem(state.cart[i].id))
                                    }}>-</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart