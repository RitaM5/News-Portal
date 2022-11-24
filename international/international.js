const internationalClick = () => {
    const catgTitle = document.getElementById('cat-titile');
    catgTitle.innerText = `3 items found for category International news`;
    const url = `https://openapi.programming-hero.com/api/news/category/05`
    fetch(url)
      .then(res => res.json())
      .then(data => displayInternational(data.data))
  }
  internationalClick();
  const displayInternational = (information) => {
    //console.log(information);
    const postEntertainment = document.getElementById('post-section');
    //console.log(info);
    for (const info of information) {
      // console.log(info);
      const para = info.details.slice(0, 150);
      const div = document.createElement('div');
      div.classList.add('col-12');
      div.innerHTML = `  
          <div class="card bg-light Larger shadow border-0 h-100 p-3 mt-4">
           <div class=" row">
           <div class="col-lg-3 col-md-12 col-12">
           <img src="${info.image_url}" class="card-img-top pt-2 mx-auto" alt="" style="width: 200px; height: 250px; border-radius: 10px">
           </div>
             <div class="card-body col-lg-9 col-md-12 col-12">
             <div class="">
             <h5 class="">${info.title}</h5>
             <p class="card-text card-para" style="font-size:14px">${para}</p>
             </div>
               <div class="row pt-3 intro-part">
                  <div class="col-md-3 col-12">
                    <div class="d-flex gx-3 justify-content-center align-items-center">
                    <img src="${info.thumbnail_url}" class="" style="width: 30px; height:30px; border-radius: 50%" alt="">
                    <div class="ms-3">
                    <span class="fw-bold" style="font-size:12px">${info.author.name}</span><br/>
                    <span class="mb-3" style="font-size:12px">${info.author.published_date}</span>
                    </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-12 pt-2 text-center">
                   <span><img style="width:20px" src="https://img.icons8.com/external-line-icons-royyan-wijaya/64/null/external-eyes-whatsername-medical-line-line-icons-royyan-wijaya.png"/></span>
                   <span class="ms-3 rating">${info.rating.number}</span>
                  </div>
                  <div class="col-md-3 col-12 pt-2 text-center star">
                   <p>⭐⭐⭐⭐⭐</p>
                  </div>
                  <div class="col-md-3 arrow">
                   <span onclick="showDetails('${info._id}')" class="ms-5"><img style="width:30px" src="https://img.icons8.com/ios/50/null/long-arrow-right.png"/></span>
                  </div>
                  </div>   
             </div>
           </div>
          </div>
          `;
      postEntertainment.appendChild(div);
    }
  
  }
  const showDetails = (infoId) => {
    //console.log(infoId);
    const postSec = document.getElementById('post-section')
    postSec.style.display = "none";
    const url = `https://openapi.programming-hero.com/api/news/${infoId}`
    fetch(url)
      .then(res => res.json())
      .then(data => singleDetails(data.data[0]))
  }
  const singleDetails = (id) => {
    console.log(id);
    const singleSec = document.getElementById('single-sec');
    const div = document.createElement('div');
    div.classList.add('col-12');
    div.innerHTML = `
    <div class="card bg-light Larger shadow border-0 h-100 p-3 mt-4">
    <div class="row">
    <h5 class="">${id.title}</h5>
    <div class="col-12">
    <img src="${id.image_url}" class="card-img-top pt-2 mx-auto" alt="" style=" border-radius: 10px">
    </div>
      <div class="card-body col-12">
      <div class="">
      <p class="card-text card-para" style="font-size:14px">${id.details}</p>
      </div>
        </div>
      </div>
    </div>
   </div>
     `
    singleSec.appendChild(div);
  }