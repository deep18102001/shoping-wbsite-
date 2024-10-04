import React from 'react'

import { Link } from 'react-router-dom'

function Navbar(props) {
    let fun = props.data
    console.log(fun,"fun");
    return (
        <>
            <div className='nav'>
                <h1>shop</h1>
                <input type='search' onChange={(e)=>{fun(e.target.value)}} placeholder='sreach your faishion' />
                <ul>
                    <li><Link to={'/Login'}>Login</Link></li>
                    <li><Link to={'/Singup'}>Sing up</Link></li>
                    <li><Link to={'/AddCart'}>AddCart</Link></li>
                </ul>
            </div>

            <div>
                {/* <div className='banner'></div> */}
                <h1 className='h1'>Fresh In Fashion</h1>

            </div>
        </>
    )
}

export default Navbar