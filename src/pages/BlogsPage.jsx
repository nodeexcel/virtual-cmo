import React, { useState } from "react";
import BlogsIdea from "../components/Blogs/BlogsIdea";
import BlogsLoader from "../components/Blogs/BlogsLoader";
import Blogstopic from "../components/Blogs/Blogstopic";
import BlogsMailed from "../components/Blogs/BlogsMailed";
import Blogstube from "../components/Blogs/Blogstube";
import BlogsReady from "../components/Blogs/BlogsReady";

function BlogsPage() {
  const [currScreen, setCurrScreen] = useState(1);
  switch (currScreen) {
    case 1:
      return <BlogsLoader setCurrScreen={setCurrScreen} />;
    case 2:
      return <BlogsIdea setCurrScreen={setCurrScreen} />;
    case 3:
    return <Blogstube setCurrScreen={setCurrScreen}/>;
    case 4:
      return <Blogstopic setCurrScreen={setCurrScreen} />;
    case 5:
    return <BlogsReady setCurrScreen={setCurrScreen}/>
    case 6:
      return <BlogsMailed />;
    default:
      return <BlogsLoader />;
  }
}

export default BlogsPage;
