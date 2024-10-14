
$(".heart").click(function(){
    toggleCanva();
})
function toggleCanva(){
    var canva = document.getElementById("pinkboard");
    canva.style.opacity = '1';
    $(".heart").hide()  
    var lover = document.getElementById("text-love");
    lover.style.opacity = '1'
}
