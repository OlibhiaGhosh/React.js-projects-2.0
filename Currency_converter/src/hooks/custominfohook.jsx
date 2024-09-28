import { useState , useEffect } from "react";
const Customhook= (fromcurrency) => {
    const [data, setData] = useState("")
    useEffect(async()=> {
       const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/${fromcurrency}`);
       const responsefinal = await response.json();
       setData(responsefinal[conversion_rates]);
       console.log(data);
    }, [fromcurrency])
    return(
        <>
          data;
        </>
    )
}