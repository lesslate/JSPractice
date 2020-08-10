const title = document.getElementById("title");

const title2 = document.querySelector("#title");

function handleClick()
{
    if (title.style.color == "gray")
    {
        title.style.color = "blue";
    }
    else
    {
        title.style.color = "gray";
    }
    //console.log("오~~ 타이틀 눌렀버렸어~");

}

title.addEventListener("click", handleClick);