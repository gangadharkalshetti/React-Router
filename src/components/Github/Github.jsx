import React from 'react'
// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/gangadharkalshetti`)
    //         .then(Response => Response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className="p-4 text-center bg-gray-100">
            <img src={data.avatar_url} alt="profile" className="w-32 mx-auto rounded-full" />
            <h2 className="text-2xl mt-2">{data.name}</h2>
            <p className="text-lg">Followers: {data.followers}</p>
            <p className="text-lg ">Public Repos: {data.public_repos}</p>
        </div>

    )
}

export default Github

export const githubInfoLoader = async () => {
    const response =  await fetch(`https://api.github.com/users/gangadharkalshetti`)
    return response.json()

}