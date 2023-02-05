import { createSlice, configureStore } from '@reduxjs/toolkit';
import user from './store/userSlice.js';
import { useParams } from 'react-router-dom';


let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        changeCount(state, i)
        {
            let product = state.findIndex((e)=>{
                return e.id == i.payload
            })
            state[product].count++;
        },
        addItem(state, copy)
        {
            console.log(copy.payload.id);
            {
                let index = state.findIndex((e)=>{
                    return e.id == copy.payload.id
                })
                {
                    index === -1 ? state.push(copy.payload) : state[index].count++
                }
            }
        },
        delItem(state, i)
        {
            let index = state.findIndex((e)=>{
                return e.id == i.payload
            })

            {
                state[index].count === 1 ? state.splice(index,1) : state[index].count--;
            }
        }
    }
})

export let {changeCount , addItem  , delItem}  = cart.actions

export default configureStore({
  reducer: { 
    cart : cart.reducer,
    user : user.reducer
  }
})