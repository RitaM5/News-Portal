 const singleDetails = () =>{
    const url =`https://openapi.programming-hero.com/api/news/${infoId}`
    fetch(url)
    .then(res => res.json())
    .then(data => singleData(data));
 }
const singleData = (single) =>{
    console.log(single);
   const singleDetails = document.getElementById('single-data')
   const div = document.createElement('div');
     div.classList.add('col-12');
     div.innerHTML = ` 
     <p>${single.title}</p>
     `;
     singleDetails.appendChild(div);
 
 }