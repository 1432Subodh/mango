'use client'
import React, { useRef } from 'react'

function page() {

    // let formref = useRef(null)
    // console.log(formref.current)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(e.target[0].value)
        let data = {
            name: e.target[0].value
        }
        let result = await  fetch('http://localhost:3000/api/products',{
            method: "POST",
            body: JSON.stringify(data)
        })
    }
  return (
    <>
        <div>
            Add Products
        </div>
        <form action="" onSubmit={handleSubmit} >
            <input  type="text" placeholder='enter name' className='bg-zinc-800' />
            <input type="submit" value="submit" />
        </form>
    </>
  )
}

export default page