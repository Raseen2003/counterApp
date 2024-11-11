import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const handleIncrementAmount=()=>{
    if(amount){
      dispatch(incrementByAmount(+amount))

    }else{
      alert("enter a valid Amount")
    }

  }
  return (
   <>
<div style={{width:'100%',height:'100vh',paddingTop:'150px',backgroundColor:'black',fontFamily: 'Anta, sans-serif'}} className="d-flex flex-column align-items-center">
  <h1 className='text-light text-center mb-5'>Counter App</h1>
  <div style={{width:'500px',height:'400px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)'}} className="border rounded text-center p-4">
    <h1 style={{fontSize:'100px', textShadow: '2px 2px 4px #000000'}} className='text-light'>{count}</h1>
    <div className="d-flex justify-content-evenly mt-5">
      <button onClick={()=>dispatch(decrement())}  type="button" class="btn btn-outline-warning p-3" style={{ boxShadow: '0px 5px 15px rgba(255, 193, 7, 0.5)' }}>Decrement</button>
      <button onClick={()=>dispatch(reset())}  type="button" class="btn btn-outline-danger p-3" style={{ boxShadow: '0px 5px 15px rgba(220, 53, 69, 0.5)' }}>Reset</button>
      <button onClick={()=>dispatch(increment())} type="button" class="btn btn-outline-success p-3" style={{ boxShadow: '0px 5px 15px rgba(40, 167, 69, 0.5)' }}>Increment</button>
    </div>
    <div className="d-flex justify-content-center align-items-center mt-5">
      <input onChange={e=>setAmount(e.target.value)} className='border rounded bg-light px-5 py-2 mx-2' type="text" placeholder='Enter Any Number' style={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)' }} />
      <button onClick={handleIncrementAmount} type="button" class="btn btn-info py-3" style={{ boxShadow: '0px 5px 15px rgba(23, 162, 184, 0.5)' }}>Increment <br /> By Amount</button>
    </div>
  </div>
</div>

   </>

  )
}

export default Counter