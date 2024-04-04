document.addEventListener("keydown",function(event){
    console.log(event.key);
    if(event.key == "Escape"){
        document.querySelectorAll("a.index")[0].click()
    }
})