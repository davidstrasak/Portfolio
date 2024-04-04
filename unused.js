document.addEventListener("keydown",function(event){
    console.log(event.key);
    if(event.key == "Enter"){
        document.querySelector(".invisible").classList.remove("invisible")
        document.querySelector(".smaller").classList.add("invisible")
    }
})