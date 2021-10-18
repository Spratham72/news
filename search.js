var main=document.getElementById("news")
var detail=JSON.parse(localStorage.getItem("newsSearch"));
appenNews(detail)
function appenNews(news){
     news.forEach(element => {
     let div=document.createElement("div");
     div.id="newsHolder";
     let fig=document.createElement("figure");
     let img=document.createElement("img");
     img.src=element.urlToImage;

     fig.append(img);
     let p=document.createElement("h4");
     p.textContent=element.title;
     div.append(fig,p)
     div.onclick=function (){
         description(element)
     };
     
     main.append(div)

     });
 }


 function description(p){
     if(localStorage.getItem("news"===null)){
         localStorage.setItem("news",JSON.stringify([]));
     }
     var ar=JSON.parse(localStorage.getItem("news"));
     ar=p;
     localStorage.setItem("news",JSON.stringify(ar));
     console.log(ar)
     location.href="news.html";
    }