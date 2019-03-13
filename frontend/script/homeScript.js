const pictures = document.getElementById("pictures");
const image = document.getElementsByClassName("overlay_image");
const eachPic = document.getElementsByClassName("click");

let eachPic_src;

handler = function(event)
{console.log("kek");
    if(event.target.className == "click")
    {
        eachPic_src = event.target.src;
        image[0].childNodes[1].src = eachPic_src;
        image[0].style.display = "block";
    }
}


pictures.addEventListener("click", handler);

image[0].addEventListener("click", function(event)
{
    if(event.target.className == "overlay_image" 
       || event.target.className == "click")
        image[0].style.display = "none";
});
