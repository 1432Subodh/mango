'use client'
import React, { useRef } from 'react'

function page() {
    const form = useRef(null)

    // console.log(form)
    const handleForm = async(e)=>{
        e.preventDefault();
        let respones= await fetch('http://localhost:3000/api/addUser', {
          method: "Post",
          body: JSON.stringify({
            name: form.current[0].value,
            email :form.current[1].value,
            age :form.current[2].value
          })
        })

        respones = await respones.json()
        console.log(respones)
        // console.log(respones)
        // console.log(form.current[0].value)
        // console.log(form.current[1].value)
        // console.log(form.current[2].value)
        
    }
  return (
    <div className='inline-flex flex-col gap-2' onSubmit={handleForm} >
        <h1 className='text-2xl font-semibold'>Add new user</h1>
        <form action="#" className='inline-flex flex-col gap-2' ref={form} method='post'>

        <input type="text"  name='name' placeholder='enter name' className='px-2 py-1 bg-zinc-800 rounded-md outline-none'/>
        <input type="email" name='email'  placeholder='enter email' className='px-2 py-1 bg-zinc-800 rounded-md outline-none'/>
        <input type="number"  name='number'  placeholder='enter age' className='px-2 py-1 bg-zinc-800 rounded-md outline-none'/>
        <input type="submit" />
        </form>
    </div>
  )
}

export default page