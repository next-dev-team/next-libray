
export const PricingCard1 = () => {
  return (
    <div className="w-full px-6 py-4 transition-colors duration-200 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-700">
      <div className="text-center">
        <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Basic</p>{' '}
        <p className="mt-4 text-gray-500 dark:text-gray-300">Essentail Features</p>{' '}
        <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">$59.99</h4>{' '}
        <h4 className="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$53.99</h4>{' '}
        <p className="mt-4 text-gray-500 dark:text-gray-300">/pre month</p>{' '}
        <p className="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>
      </div>{' '}
      <div className="mt-8 space-y-8">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>{' '}
          <span className="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
        </div>{' '}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>{' '}
          <span className="mx-4 text-gray-700 dark:text-gray-300">5 wathclists included</span>
        </div>{' '}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>{' '}
          <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
        </div>{' '}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>{' '}
          <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
        </div>{' '}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>{' '}
          <span className="mx-4 text-gray-700 dark:text-gray-300">5 exclusive widgets</span>
        </div>
      </div>{' '}
      <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Choose Basic
      </button>
    </div>
  );
};
