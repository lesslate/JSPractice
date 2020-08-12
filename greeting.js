const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function HandleSubmit(event)
{
    event.preventDefault();
    const currentValue = input.value;
    PaintGreeting(currentValue);
    SaveName(currentValue);
}

function SaveName(text)
{
    localStorage.setItem(USER_LS, text);
}

function AskForName()
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", HandleSubmit);
}

function PaintGreeting(text)
{
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello  ${text}`
}

function LoadName()
{
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null)
    {
        AskForName();
    }
    else
    {
        PaintGreeting(currentUser);
    }
}
function Init()
{
    LoadName()
}

Init();