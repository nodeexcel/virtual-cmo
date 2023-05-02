import React, { useState } from 'react'
import BlogsIdea from '../components/Blogs/BlogsIdea';
import BlogsLoader from '../components/Blogs/BlogsLoader';
import Blogstopic from '../components/Blogs/Blogstopic'
import BlogsMailed from '../components/Blogs/BlogsMailed'

function BlogsPage() {
    const [currScreen, setCurrScreen] = useState(1)
  switch(currScreen){
    case 1:
        return <BlogsLoader setCurrScreen={setCurrScreen}/>;
    case 2:
        return <BlogsIdea setCurrScreen={setCurrScreen}/>;
    case 3:
        return <Blogstopic setCurrScreen={setCurrScreen}/>;
    case 4:
        return <BlogsMailed/>;
    default:
        return<BlogsLoader/>;
  }
}

export default BlogsPage