import { useLoaderData } from "react-router";
import placeholderImg from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, tags, title, body_html } = blog;
  return (
    <>
      <div className=" mx-auto transition border p-2 border-opacity-30 group hover:no-underline focus:no-underline  overflow-hidden">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeholderImg}
        />
        <div className="flex flex-wrap py-2 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline "
            >
              #{tag}
            </a>
          ))}
        </div>
        <div className="py-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {/* {title.substring(0, 25)}.. */}
            {title}
          </h3>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Content;
