import axios from 'axios';

const baseURL = process.env.REACT_APP_STAR_WARS_BASEURL;

export const getFilms = () => {
  return axios.request({ baseURL, url: 'films' })
}

export const getFilmById = async (id: number) => {
  return axios.request({ baseURL, url: `films/${id}` })
}