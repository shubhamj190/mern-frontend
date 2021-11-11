import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"70px"}}>
        {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        {props.alert.msg} 
        </div>}
        </div>
    )
}
