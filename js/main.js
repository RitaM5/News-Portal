const entertainmentClick = () => {
  const catgTitle = document.getElementById('cat-titile');
  catgTitle.innerText = `4 items found for category Entertainment`;
  const url = `https://openapi.programming-hero.com/api/news/category/01`
  fetch(url)
    .then(res => res.json())
    .then(data => displayEntertainment(data.data))
}
entertainmentClick();
const displayEntertainment = (information) => {
  //console.log(information);
  const postEntertainment = document.getElementById('post-section');
  //console.log(info);
  for (const info of information) {
    console.log(info);
    const para = info.details.slice(0, 150);
    const div = document.createElement('div');
    div.classList.add('col-12');
    div.innerHTML = `  
        <div class="card bg-light Larger shadow border-0 h-100 p-3 mt-4">
         <div class="d-flex gx-3">
         <div>
         <img src="${info.image_url}" class="card-img-top pt-2 mx-auto" alt="" style="width: 200px; height: 250px; border-radius: 10px">
         </div>
           <div class="card-body">
           <div class="ms-3">
           <h5 class="">${info.title}</h5>
           <p class="card-text" style="font-size:14px">${para}</p>
           </div>
             <div class="row pt-5">
                <div class="col-md-3">
                  <div class="d-flex gx-3 justify-content-center align-items-center">
                  <img src="${info.thumbnail_url}" class="" style="width: 30px; height:30px; border-radius: 50%" alt="">
                  <div class="ms-3">
                  <span class="fw-bold" style="font-size:12px">${info.author.name}</span><br/>
                  <span class="mb-3" style="font-size:12px">${info.author.published_date}</span>
                  </div>
                  </div>
                </div>
                <div class="col-md-3 pt-2 text-center">
                 <span><img style="width:20px" src="https://img.icons8.com/external-line-icons-royyan-wijaya/64/null/external-eyes-whatsername-medical-line-line-icons-royyan-wijaya.png"/></span>
                 <span class="ms-3">${info.rating.number}</span>
                </div>
                <div class="col-md-3 pt-2 text-center">
                 <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div class="col-md-3">
                 <span class="ms-5"><img src="https://img.icons8.com/ios/50/null/long-arrow-right.png"/></span>
                </div>
             </div>
           </div>
         </div>
        </div>
        `;
    postEntertainment.appendChild(div);
  }
  /* ${info.data[0].author.img} */

}