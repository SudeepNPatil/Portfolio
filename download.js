const Pro1 = document.getElementById('Pro1');

Pro1.addEventListener('click', function some() {

    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";

    closeBtn.addEventListener("click", function closePopup() {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    });


});

const Pro2 = document.getElementById('Pro2')

Pro2.addEventListener('click', function some() {

    const popup = document.getElementById("popup1");
    const closeBtn = document.getElementById("close-btn1");

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";

    closeBtn.addEventListener("click", function closePopup() {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    });

})

const Pro3 = document.getElementById('Pro3')

Pro3.addEventListener('click', function some() {

    const popup = document.getElementById("popup2");
    const closeBtn = document.getElementById("close-btn2");

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";

    closeBtn.addEventListener("click", function closePopup() {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    });

})

const Pro4 = document.getElementById('Pro4')

Pro4.addEventListener('click', function some() {

    const popup = document.getElementById("popup3");
    const closeBtn = document.getElementById("close-btn3");

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";

    closeBtn.addEventListener("click", function closePopup() {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    });

})
