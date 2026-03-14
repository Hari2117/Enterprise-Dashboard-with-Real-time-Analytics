import { useState } from "react"

export default function useLocalStorage(key:string, initial:any){
 const [value,setValue] = useState(()=>{
   const saved = localStorage.getItem(key)
   return saved ? JSON.parse(saved) : initial
 })

 const setStoredValue = (val:any)=>{
   setValue(val)
   localStorage.setItem(key, JSON.stringify(val))
 }

 return [value,setStoredValue]
}