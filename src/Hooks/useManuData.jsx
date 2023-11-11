import { useEffect, useState } from "react"

const useManuData = ()=>{
    const [manus, setmanus ] = useState([])
    const [loding , setLoding] = useState(true)
    useEffect(()=>{
        fetch("http://localhost:5000/manuData")
        .then(res => res.json())
        .then(data => {
            setmanus(data)
            setLoding(false)
        })
    },[])
    return[manus, loding]
}
export default useManuData