import React from 'react'

function ListItem(props) {
    return (
        <li>{props.item.text}
            &emsp; <button onClick={()=>props.deleteItem(props.item.myKey)}>Delete</button>
        </li>
    )
}

export default ListItem;