import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="">
      <div className="mx-auto flex flex-col items-center  text-center md:py-32 md:px-10 lg:px-32">
        <h1 className="text-5xl font-bold leading-none sm:text-5xl ">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-[300%] text-transparent bg-clip-text animate-gradient">
            ByteBlaze
          </span>
        </h1>
        <p className="py-6 text-lg">
          ByteBlaze is the bridge between the complex world of technology and
          the curious minds eager to understand it
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={"blogs"}
            class="relative inline-block px-4 py-2 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
            <span class="relative text-black group-hover:text-white">
              Read Blogs
            </span>
          </Link>
          <Link
            to={"bookmarks"}
            class="relative inline-block px-4 py-2 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
            <span class="relative text-black group-hover:text-white">
              Bookmarks
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
