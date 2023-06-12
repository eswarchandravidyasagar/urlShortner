
import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import fs from 'fs';

interface Url {
  id: string;
  url: string;
}

const urls: Url[] = [];




const shortUrl: string = '';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const urls: Url[] = [];
  //url shortner logic
  if (req.method === 'POST') {
    const { url } = req.body;
    const id = nanoid(5);
   
    const shortUrl = `${id}`;
    urls.push({ id, url,  }); 
    res.status(200).json({  url , shortUrl});

   
  }


//redirect logic


  









  if (req.method === 'GET') {
    const id = req.url?.substring(1);
    const url = urls.find(u => u.id === id)?.url;
    if (url) {
      res.writeHead(301, { Location: url });
      res.end();
    } else {
      res.status(404).send('Url not found');
    }

    

  }


  


 

}

//set original url for short url meta data should be the original url

