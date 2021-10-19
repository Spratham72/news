var main=document.getElementById("news");
function getNews(){
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2ed45b1c0682445ca16e1978cd555487")
    .then(res=>{
       return res.json()
    })
    .then(data=>{
        appenNews(data.articles)
    })
}
getNews();

function appenNews(news){
    news.forEach(element => {
    let div=document.createElement("div");
    div.id="newsHolder";
    let fig=document.createElement("figure");
    let img=document.createElement("img");
    img.src=element.urlToImage;

    fig.append(img);
    let p=document.createElement("h3");
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

function search(){
    let search=document.getElementById("search").value;
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-10-18&sortBy=popularity&apiKey=2ed45b1c0682445ca16e1978cd555487`)
    .then(res=>{
       return res.json()
    })
    .then(data=>{
        if(localStorage.getItem("newsSearch"===null)){
        localStorage.setItem("newsSearch",JSON.stringify([]));
    }
    var ar=JSON.parse(localStorage.getItem("newsSearch"));
    ar=data.articles;
    localStorage.setItem("newsSearch",JSON.stringify(ar));
    console.log(ar)
    location.href="search.html";
    
    })
    
}
//2ed45b1c0682445ca16e1978cd555487
//https://newsapi.org/v2/top-headlines?country=us&apiKey=2ed45b1c0682445ca16e1978cd555487
