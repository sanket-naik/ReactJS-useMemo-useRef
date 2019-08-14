import React, {useState} from 'react'
import {Count} from './Count'
import {CountWithMemo} from './CountWithMeno'

export default function Counter() {

    const [text, setText] = useState('')

    return (
        <div  style={{border:'solid 1px red', padding:10, margin:20}}>
            <h1>Using memo Won't render a component when you do not pass any props. This will result in less rendering anfd optimised</h1>
            Type Here: <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <h3>Without Memo:</h3>
            <Count/>
            <h3>Using Memo:</h3>
            <CountWithMemo/>
        </div>
    )
}
