import React,{useEffect, useRef} from 'react'

const UseRef = () => {
    const data=useRef("null")
    const submitHandler=e=>{
        e.preventDefault()
        console.log(data.current.value);
    
    // update data
    // data.current.value="hello manoj"
    }
    // auto focus or cursor 
    useEffect(()=>{
        data.current.focus();   
    })
  return (
    <>
      <center>
          <form className='mt-3' onSubmit={submitHandler}>
              <input ref={data} type="text" placeholder='Enter Your name' /><br/><br/>
              <input type="submit" value="Submit" />
          </form>
          <h1>{data.current.value}</h1>
      </center>
    </>
  )
}

export default UseRef;
