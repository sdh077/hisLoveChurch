import { supabase } from '@/lib/api'
import { type NextRequest } from 'next/server'
const axios = require('axios');
const cheerio = require('cheerio');

export async function POST(request: Request) {
  const body = await request.json()
  const arr = []
  for (const link of body.links) {
    const url = `https://www.youtube.com/watch?v=${link}`
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const title = $('title').text();
    const result = await supabase.from('archive').insert({ title, link })
    arr.push(result)
  }
  return Response.json(arr)
}