import { useEffect, useState } from "react"

const Githubuserdata = (Name) => {
    const [error, setError] = useState("")
    const [user, setUser] = useState("")
    function debounce(func, delay) {
        let timeout=null
        return () => {
            if(timeout) clearTimeout(timeout)
        
            timeout=setTimeout(() => {
                func()
            }, delay)
        }
    }
    useEffect(()=>{
        const fetchdata= async() => {
            try{
                const response = await fetch(`https://api.github.com/users/${Name}`);
                const responsefinal= await response.json()
                setUser(responsefinal)
            }catch(error){
                setError(error)
            }
        }
        debounce(fetchdata, 500)
        console.log(user);
    }, [Name])

    return {user , error};
}

export default Githubuserdata