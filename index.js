document.addEventListener("keydown",function(event){
    console.log(event.key);
    if(event.key == "Enter"){
        document.querySelectorAll("a.projects")[0].click()
    }
})