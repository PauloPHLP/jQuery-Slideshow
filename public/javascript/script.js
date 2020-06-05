$(() => {
    var galleryImage = $(".gallery").find("img").first();
    var images = [
        "images/image 1.jpg",
        "images/image 2.jpg",
        "images/image 3.jpg",
    ];

    var position = 0;

    setInterval(() => {
        position = (position + 1) % images.length;

        galleryImage.fadeOut(function() {
            $(this).attr("src", images[position]);
            $(this).fadeIn();
        });
        console.log(galleryImage.attr("src"));
    }, 3000);
});