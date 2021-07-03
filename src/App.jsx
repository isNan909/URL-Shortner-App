import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
 // eslint-disable-line
    console.log('loaded');
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        <div>
          <h2 className="mt-6 text-left text-3xl font-extrabold text-gray-900">
            URL Shortner
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="link-text" className="sr-only">
                link text
              </label>
              <input
                id="link-text"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="appearance-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-grey-600 rounded-md focus:outline-none focus:ring-green-400 focus:z-10 sm:text-lg"
                placeholder="Your long link"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group w-full flex justify-center py-4 px-5 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create a Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
