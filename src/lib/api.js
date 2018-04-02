import axios from 'axios';

export function getAPOD(date = ''){
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=ysRaP4R9TtV4DrkiXA7ik4dIkmyx9O6JxnYkV5Vg&date=${date}`)
}