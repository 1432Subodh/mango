

async function getUser(id) {
  console.log(id)
  let data = await fetch(`http://localhost:3000/api/users/${id}`)
  data = await data.json()
  return data
}

const page = async ({params}) => {
 
  const user = await getUser(params.userid)
  console.log(user)
  console.log(params)
  return (
    <div>
      {user.name}
    </div>
  )
}

export default page