const right=document.querySelector(".right");
const btns=document.querySelectorAll('.btn');
const articles=document.querySelectorAll('.content');
const img=document.querySelectorAll('.img')
right.addEventListener("click",function(e){
  // console.log(e.target.dataset.id);
  const id= e.target.dataset.id;
  if(id){
    btns.forEach(function(btn){
      btn.classList.remove('active')
      e.target.classList.add("active")
    })
    articles.forEach(function(article){
      // console.log(article)
      article.classList.remove("active");
    })
    img.forEach(function(image){
      image.classList.remove('active')
      if(image.classList.contains(id)){
        image.classList.add('active')
      }
      
    })
const element=document.getElementById(id);
element.classList.add("active");

  }
})