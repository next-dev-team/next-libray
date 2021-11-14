
export const ProfileCard5 = () => {
  return (
    <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
      <div className="mb-8">
        <img
          className="object-center object-cover rounded-full h-36 w-36"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="photo"
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">Lucy Carter</p>
        <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
      </div>
    </div>
  );
};
