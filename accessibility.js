window.onload = () => {
    const tt = document.querySelector("div.tooltip");
    const ttcontent = document.querySelector(".tooltip-content");
    const last = document.querySelectorAll(".tooltip-content>li")[5];
    tt.addEventListener( "focus" , e => {
	ttcontent.style.display = "block";
    });
    last.addEventListener( "blur" , e => {
	ttcontent.style.display = "none";
    });
}
