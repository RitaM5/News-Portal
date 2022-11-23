const entertainmentClick = () => {
    const catgTitle = document.getElementById('cat-titile');
    catgTitle.innerText = `4 items found for category Entertainment`;
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
        .then(res => res.json())
        .then(data => displayEntertainment(data))
}
entertainmentClick();
const displayEntertainment = (info) => {
    //console.log(information);
    const postEntertainment = document.getElementById('post-section');
    console.log(info);
    const div = document.createElement('div');
    div.classList.add('col-12');
    div.innerHTML = `  
        <div class="card bg-light Larger shadow border-0 h-100 p-3">
         <div class="d-flex gx-3">
         <div>
         <img src="${info.data[0].author.img}" class="card-img-top pt-2 mx-auto" alt="" style="width: 250px; border-radius: 10px">
         </div>
           <div class="card-body">
           <h5 class="">${info.data[0].title}</h5>
             <p class="card-text" style="font-size:14px">${info.data[0].details}</p>
             <p class="card-text"><span class="fw-bold">brand :</span></p>
           </div>
         </div>
        </div>
        `;
    postEntertainment.appendChild(div);


}