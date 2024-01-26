const difButtons = document.querySelectorAll("button");
const difHandler = (ev)=>{
    const difficulty= ev.target.innerText.toLowerCase()
    localStorage.setItem("difficulty",difficulty)
}
difButtons.forEach(btn =>{
    btn.addEventListener("click",(event)=> difHandler(event))
})