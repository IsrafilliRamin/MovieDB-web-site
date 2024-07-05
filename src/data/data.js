

const Key = "20325b57b63187bb9a782879cbcc0ac5";



export const getData = async (name) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
    const data = await response.json();
   return data
}
