gsap.from(".line h1", { y: 150, duration: 1, stagger: 0.5 });

// let h3Timer = document.querySelectorAll(".line-part-para h3");
// let p = 100;
// let grow = 0;
// let loding;
// let tl = gsap.timeline();

// loding = setInterval(() => {
//     grow = grow + 1;
//     if (grow == 100) {
//         clearInterval(loding);
//         tl.to("#loader", {
//             y:-100,
//             opacity: 0,
//             duration: 0.4,
//             dealy: 4,
//             onComplete: () => {
//                 document.getElementById("loader").style.display = "none"; // Hide loader after animation
//             }
//         })
//     }
//     h3Timer[0].textContent = grow + "%";

// }, 35);

let content = document.querySelector(".content");
let flagimg = document.querySelector(".flag-img");

content.addEventListener("mouseenter", function () {
    console.log("mouse enter");
    flagimg.classList.add("activ-flag");

});

content.addEventListener("mousemove", function (dets) {
    console.log(dets.clientX, dets.clientY);

    gsap.to(flagimg, {
        x: dets.clientX - content.getBoundingClientRect().left, 
        y: dets.clientY - content.getBoundingClientRect().top,
        duration: 0.3,
        ease: "power2.out"
    })
});


content.addEventListener("mouseleave", function () {
    console.log("mouse enter");
    flagimg.classList.remove("activ-flag");
    console.log("mouse leave");

});