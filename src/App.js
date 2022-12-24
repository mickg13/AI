import React , {useEffect, useState} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";




const alankey = '96d2179a02b9c0fca0feb9cd0111162f2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles, setNewsArticles] = useState ([]);

    useEffect(() =>{
        alanBtn({
            key: alankey,
            onCommand: ({command , articles})=>{
                if(command ==='headlines'){
                    setNewsArticles(articles);
                }

            }

        })
    }, [])
    return(
        <div>
            <h1>alan news application </h1>

            <NewsCards articles= {newsArticles} />
          
            
        </div>
    )
}



export default App