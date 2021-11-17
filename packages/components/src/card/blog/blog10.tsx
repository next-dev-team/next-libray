const BlogCard10 = () => {
  return (
      <div className="flex flex-col w-full bg-white rounded shadow-lg">
        <div
          className="w-full h-64 bg-top bg-cover rounded-t"
          style={{
            backgroundImage:
              'url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)',
          }}
        />
        <div className="flex flex-col w-full md:flex-row">
          <div className="text-white flex flex-row justify-around p-4 font-bold leading-none uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">Jan</div>
            <div className="md:text-6xl">13</div>
            <div className="md:text-xl">7 pm</div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800">
              2020 National Championship
            </h1>
            <p className="leading-normal">
              The College Football Playoff (CFP) determines the national champion of the top
              division of college football. The format fits within the academic calendar and
            </p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="w-1/2">Mercedes-Benz Superdome</div>
              <div className="w-1/2 flex justify-end">
                <img
                  src="https://collegefootballplayoff.com/images/section_logo.png"
                  className="w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default BlogCard10;
