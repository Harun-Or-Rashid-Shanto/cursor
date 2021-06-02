const cursor=document.querySelector(".cursor");


//cursor movement
document.addEventListener("mousemove",(e)=>{
    let x=e.pageX;
    let y=e.pageY;

    cursor.style.top= y + "px";
    cursor.style.left= x + "px";
    cursor.style.display= "block";

    //stop Animation
    function stopMouse(){
        cursor.style.display="none";
    }

    setTimeout(stopMouse, 5000);
})

//hide

document.addEventListener("mouseout",()=>{
    cursor.style.display="none";
})