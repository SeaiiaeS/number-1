import React from "react"
import Todo from './todo'

export default function Todomain(props) {
    return(
        <ol>
            {props.lok.map(en =>{
                return <Todo lpk={en} key={en.title}/>
            })}
            
        </ol>
    )
}