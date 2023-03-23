import React from 'react'
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';
import { useSelector } from 'react-redux';

const Counter = () => {

    const dispatch = useDispatch() 
    const {count} = useSelector(state => state.counter)

  return (
    <div>
        <p>0</p>

        <div className='btn1'>
            <button className='inc' onClick={() => {dispatch(increment())}}> +</button>
            <button className='dec'onClick={() => {dispatch(decrement());}} > -</button>
        </div>

        <div className='btn1'>
            <button className='rec' onClick={() => {dispatch(reset())}}> Reset</button>
            
        </div>

      
    </div>
  )
}

export default Counter
