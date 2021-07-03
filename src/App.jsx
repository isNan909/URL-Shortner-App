import React, { useState } from 'react';
import getLink from './api/requests';

function App() {
  const [input, setInput] = useState('');
  const [disable, setDisable] = useState('disabled');

  const handleKeyDown = (event) => {
    console.log(event.target.value);
    validURL(event.target.value);
    setInput(event.target.value);
  };

  const validURL = (string) => {
    const pattern = new RegExp(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    let isValidURL = !!pattern.test(string);
    if (isValidURL !== true) {
      setDisable('disabled');
    } else {
      setDisable('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getShortLink();
  };

  const getShortLink = async () => {
    console.log('submit form', input);
    // const shortLink = await getLink();
    // console.log(shortLink);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        <div>
          <h2 className="mt-6 text-left text-3xl font-extrabold text-gray-900">
            Short URL Generator
          </h2>
          <p className="mt-2 text-left text-1xl text-gray-400">
            URL shortener built to generate short links that creates better
            click impression.
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
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
                value={input}
                onChange={handleKeyDown}
                className="appearance-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-base"
                placeholder="Paste your long link here"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={
                disable
                  ? 'cursor-not-allowed group disabled w-full flex justify-center py-4 px-5 border border-transparent text-lg font-medium rounded-md text-white bg-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                  : 'group w-full flex justify-center py-4 px-5 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              }
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
