const xHttpReq = new XMLHttpRequest();

let dynamicContent = ["header", "footer"];

window.onload = function()
{
    const header = document.getElementById("header");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");

    dynamicContent.forEach(function(page)
    {
        contentOnServer('get', (page + ".html"), 
                        null, document.getElementById(page));
    });
    setHeight();
}

function contentOnServer(request, content, parameter, location)
{
    xHttpReq.open(request , content, false);

    xHttpReq.onreadystatechange = function()
    {
        if(this.readyState == 4)
        {
            if(this.status == 200)
                try
                {
                    location.innerHTML = this.responseText;
                }
                catch(exception)
                {
                    console.warn(exception);
                }

            if(this.status == 404)
                console.warn("File not found!");
        }
    }

    //xHttpReq.setRequestHeader("a", "aa");
    xHttpReq.send(parameter);
}

function setHeight()
{
    content.style.height = window.innerHeight;
}