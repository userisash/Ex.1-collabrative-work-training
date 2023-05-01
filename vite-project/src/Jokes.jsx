import { useEffect, useState } from "react";

const GetJokes = () =>{
    const [jokes, setJokes] = useState(null)

    useEffect(async () =>{
        let headersList = {
            "X-Api-Key": "xr5Rb5CmQXb+R8ZokWLc+g==0IzuoCrROH0gQH80 "
           }
           let response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=5", {
             method: "GET",
             headers: headersList
           });
           try{
               let data = await response.text();
               setJokes(data)
               if(!data){
                throw new Error("something went wrong")
               }
               console.log(data);
           }
           catch(err){
            console.log(Error)
           }
    })
    return(
        <>
        
        </>
    )
}