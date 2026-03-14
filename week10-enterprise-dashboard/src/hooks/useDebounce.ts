import { useState, useEffect } from "react"

export default function useDebounce(value:any, delay:number){
 const [debounced,setDebounced] = useState(value)

 useEffect(()=>{
  const handler = setTimeout(()=> setDebounced(value), delay)
  return ()=> clearTimeout(handler)
 },[value])

 return debounced
}