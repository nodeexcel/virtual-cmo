import React, { useState } from 'react'
import BlogsIdea from '../components/Blogs/BlogsIdea';
import BlogsLoader from '../components/Blogs/BlogsLoader';

function BlogsPage() {
    const [currScreen, setCurrScreen] = useState(1)
  switch(currScreen){
    case 1:
        return <BlogsLoader setCurrScreen={setCurrScreen}/>;
    case 2:
        return <BlogsIdea setCurrScreen={setCurrScreen}/>;
    default:
        return<BlogsLoader/>;
  }
}

export default BlogsPage