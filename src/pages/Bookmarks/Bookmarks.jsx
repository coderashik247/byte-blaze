import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../../utils";
import BlogCard from "../../components/BlogCard/BlogCard";
import Container from "../../components/Container/Container";
import EmptyBlogs from "../../components/EmptyBlogs/EmptyBlogs";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const savedBlogs = getBlogs();
    setBlogs(savedBlogs);
  }, []);

  const handleDelete =(id) =>{
    deleteBlogs(id);
    const savedBlogs = getBlogs();
    setBlogs(savedBlogs);
  }
  if(blogs.length < 1){
    return ( <EmptyBlogs message={'No Bookmarks Found'} address={'/blogs'} label={'Browse Blogs'}>
    </EmptyBlogs> )
  }
  return (
    <Container>
      <div className="max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {blogs.map((blog) => (
            <BlogCard  key={blog.id} deletable={true} handleDelete={handleDelete} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Bookmarks;
