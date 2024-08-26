// 'use client'
import Link from 'next/link'


async function getUser() {
    let data = await fetch('http://localhost:3000/api/users')
    data = await data.json()
    return data
}

async function page() {
    // const [data, setdata] = useState([])
    // useEffect(() => {
      
    //     fetch('http://localhost:3000/api/users').then(response => response.json())
    //     .then(json => setdata(json))
    // }, [])
    const data = await getUser()
    console.log(data)
    
    return (
        <>
            <div>user list</div>
            <div>
                

                {
                    data.map(ele=><p key={ele.id}><Link href={`./user/${ele.id}`}>{ele.name}</Link></p>)
                }
            </div>
        </>
    )
}

export default page