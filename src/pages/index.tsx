import { useEffect, useState } from 'react';
import axios from 'axios';
import handler from './api/urlShorten';
import { map } from 'cheerio/lib/api/traversing';
import { data } from 'autoprefixer';
const HomePage = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  

  

 




  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('/api/urlShorten', {
      method: 'POST',
      body: JSON.stringify({ url, shortUrl}),
      headers: {
        'Content-Type': 'application/json',

      },
    });
    const data = await response.json();


    setShortUrl(data.shortUrl);
    

    console.log("data",data);


console.log("shortUrl",shortUrl);




    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <label htmlFor="url" className="font-medium text-gray-800">
          Enter a URL to shorten:
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="url"
            id="url"
            name="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Shorten
          </button>
        </div>
      </form>
      {shortUrl && (

        <div className="  flex flex-col items-center mt-8 space-y-4">
          <p className="font-medium text-gray-800">Shortened URL:</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            
            className="text-blue-500 underline"
          >
            {shortUrl}
          </a>

        </div>


      )}


      
      
    </div>
  );
};

export default HomePage;