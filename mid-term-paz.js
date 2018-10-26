function imageToggle(){

    var img = document.getElementById("toggle-image");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 
}
    var toggle = setInterval(imageToggle, 2000);

    var images = [], x = 0;
    images[0] = "images/images/banner_atar.jpg";
    images[1] = "images/images/paz_250x110103131473.jpg";
    images[2] = "images/images/250X110668568400.jpg";

    