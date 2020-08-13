const body = document.querySelector("body");

const IMG_NUM = 3;

// function HandleImgLoad()
// {

// }

function PaintImage(imgNum)
{
    const image = new Image();
    image.src = `images/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    //image.addEventListener("loadend", HandleImgLoad);
    body.appendChild(image);
}

function GenRandom()
{
    const num = Math.floor(Math.random() * 3);
    return num;
}

function Init()
{
    const randomNum = GenRandom();
    PaintImage(randomNum);
}

Init();