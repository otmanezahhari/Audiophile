import Products from './data.json';

export function getAll(){
  return Promise.resolve(Products);
}


export default {
  getAll
}