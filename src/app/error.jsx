'use client'
import { useEffect } from "react"
export default function error({error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error])
  return (
    <div className=" text-center mt-10">
      <h1>something went wrong please try again.</h1>
      <button onClick={()=> reset()} className="hover:text-amber-500 cursor-pointer mt-3">try again</button>
    </div>
  )
}
