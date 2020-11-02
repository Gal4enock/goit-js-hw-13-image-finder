let page = 0;
export default async function getImages(input) {
  let word = input.value;
  if (word === '') {
    input.innerHTML = '';
    return
  }
  page += 1;
  let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${word}&page=${page}&per_page=12&key=18952122-26c4c8572f246f891e5c3799b`;
   
  let response = await fetch(url)
    .then(res => res.json())
  .then(obj => obj.hits)
  
  return response
}
