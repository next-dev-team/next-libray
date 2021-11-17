 const ProfileCard8 = () => {
  return (
    <div className="w-full max-w-xs text-center">
      <img
        src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
        alt="avatar"
        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
      />
      <div className="mt-2">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
      </div>
    </div>
  );
};

export default ProfileCard8;
