var detail=JSON.parse(localStorage.getItem("news"));
    console.log(detail)
    var img=document.getElementById("img");
    img.src=detail.urlToImage;
    var heading=document.getElementById("heading");
    heading.textContent=detail.title;
    var desc=document.getElementById("para");
    desc.textContent=detail.description;
    var auth=document.getElementById("author");
    auth.textContent=`-${detail.author}`;
    var source=document.getElementById("source");
    source.textContent=`Source: ${detail.source.name}`
    var publish=document.getElementById("pub");
    publish.textContent=`Published Ar: ${detail.publishedAt}`