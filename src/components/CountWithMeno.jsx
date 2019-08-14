import React,{useState, useRef, memo} from 'react'

export const CountWithMemo=memo(()=>{

    const [count, setcount] = useState(0)

    const renders = useRef(0)

    return (
        <div style={{border:'solid 1px green', padding:10, margin:20}}>
            <h3>Count:{count}</h3>
            <h3 style={{color:'red'}}>Component rendered: {renders.current++} times</h3>
            <button onClick={()=>setcount(count+1)}>Increment</button>
        </div>
    )
}
)
