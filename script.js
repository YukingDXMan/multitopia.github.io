$("#menu-btn").on("click", ()=>{
    // window.location.href="./index.html";
    if(header_resize===true){
        $("header").css("height", `calc(6rem + ${document.getElementById("menu").clientHeight}px)`);
        // $("header").css("opacity", 0.7);
        $("#menu-btn").css("pointer-events", "none");
        header_resize=false;
        setTimeout(() => {
        $("#menu-btn").css("pointer-events", "all");
        }, 500);
    }else
    if(header_resize===false){
        $("header").css("height", "5rem");
        // $("header").css("opacity", 1);
        $("#menu-btn").css("pointer-events", "none");
        setTimeout(() => {
            header_resize=true;
        $("#menu-btn").css("pointer-events", "all");
        }, 500);
    }
})
var header_resize=true;
setInterval(() => {
    if(header_resize===true){
        document.querySelectorAll("main")[0].style.paddingTop=(document.querySelectorAll("header")[0].clientHeight+"px");
    };
}, 10);