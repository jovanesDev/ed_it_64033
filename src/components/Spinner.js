import React from 'react'

const Spinner = () => {
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'80vh',
            width:'100vw'
        }}>
            <div style={{width: "5rem", height: "5rem"}} className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner