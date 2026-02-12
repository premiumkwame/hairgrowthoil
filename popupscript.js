// show popup after 5 seconds
setTimeout(function(){
    document.getElementById("email-popup").style.display ="flex"
}, 5000);

// close popup when X is clicked
document.querySelector(".close-btn").addEventListener("click",function(){
    document.getElementById("email-popup").style.display ="none";
});

// close popup when clicking outside content
document.getElementById("email-popup").addEventListener("click", function(e){
    if(e.target=== this){ 
        this.style.display ="none";     
    }
}); 