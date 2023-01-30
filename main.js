var btn=document.getElementById("btn");
btn.addEventListener("click",function(){

    var col1=Math.round(Math.random()*256);
    var col2=Math.round(Math.random()*256);
    var col3=Math.round(Math.random()*256);
    document.querySelector(".body-bg").style.background=`rgb(${col1},${col2},${col3})`;
})
