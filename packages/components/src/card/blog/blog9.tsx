const BlogCard9 = () => {
  return (
    <a
      href="#"
      className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center"
    >
      <img
        className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src="https://flowbite.com/docs/images/blog/image-4.jpg"
      />
      <div className="p-4 flex flex-col justify-between leading-normal">
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 mb-3">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
          chronological order.
        </p>
      </div>
    </a>
  );
};
export default BlogCard9;
