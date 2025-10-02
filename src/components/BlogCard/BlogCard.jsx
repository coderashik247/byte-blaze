import React from "react";
import { Link } from "react-router";
import placeholderImg from '../../assets/404.jpg'

const BlogCard = ({ blog }) => {
  const { cover_image, title, published_at, description } = blog;
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${blog.id}`}
        className="max-w-sm mx-auto transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeholderImg }
        />
        <div className="py-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {/* {title.substring(0, 25)}.. */}
            {title}
          </h3>
          <span className="text-xs ">
            {new Date(published_at).toLocaleDateString()}
            {/* {new Date(published_at).toLocaleDateString()} */}
          </span>
          <p>{description}</p>
        </div>
        <div></div>
      </Link>
    </div>
  );
};

export default BlogCard;
