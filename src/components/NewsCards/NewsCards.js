import React from 'react'
import NewsCard from './NewsCard/NewsCard'

const NewsCards = ({articles}) => {
  return (
      <div>
<h1> hello world</h1>

         {articles.map((articles ,i) =>(
        

        < NewsCard />
        

        ))}
    </div>
  );
}

export default NewsCards