
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotive();

gsap.from(".line h1", { y: 150, duration: 1, stagger: 0.5 });

function loadingAnimation() {
    let h3Timer = document.querySelectorAll(".line-part-para h3");
    let p = 100;
    let grow = 0;
    let loding;
    let tl = gsap.timeline();

    loding = setInterval(() => {
        grow = grow + 1;
        if (grow == 100) {
            clearInterval(loding);
            tl.to("#loader", {
                y: -100,
                opacity: 0,
                duration: 0.4,
                dealy: 4,
                onComplete: () => {
                    document.getElementById("loader").style.display = "none"; // Hide loader after animation
                }
            })
        }
        h3Timer[0].textContent = grow + "%";

    }, 35);
}

loadingAnimation();
let tl = gsap.timeline();

tl.from(".content", { y: 150, duration: 1, stagger: 0.5 });

function CustomCursor() {
    let CustomCursor = document.querySelector(".custom-cursor");
    document.addEventListener("mousemove", function (e) {

        gsap.to(CustomCursor, {
            left: e.x,
            top: e.y,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    Shery.makeMagnet(".menu ul li" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

}
CustomCursor()

function CustomCursor2() {

    let content = document.querySelector(".content");
    let flagimg = document.querySelector(".flag-img");

    content.addEventListener("mouseenter", function () {
        console.log("mouse enter");
        flagimg.classList.add("activ-flag");

    });

    content.addEventListener("mousemove", function (dets) {
        console.log(dets.clientX, dets.clientY);

        gsap.to(flagimg, {
            left: dets.x - 100,
            top: dets.y - 250,
            duration: 0.3,
            ease: "power2.out"
        })
    });


    content.addEventListener("mouseleave", function () {
        console.log("mouse enter");
        flagimg.classList.remove("activ-flag");
        console.log("mouse leave");

    });
}

CustomCursor2();


function videoContaineranime() {
    let CustomCursor = document.querySelector(".custom-cursor");
    let page2 = document.querySelector(".page2 img");
    let playbox = document.querySelector(".play-anime");
    let videoContainer = document.querySelector(".video-container");
    let video = document.querySelector("video")
    let isPlaying = false;

    playbox.addEventListener("click", function () {
        if (!isPlaying) {
            page2.style.opacity = 0;
            video.play()
            playbox.innerHTML = `<i class="ri-pause-line text-xl"></i>`;
            isPlaying = true;
        } else {
            page2.style.opacity = 1;
            playbox.innerHTML = `<i class="ri-play-line text-xl"></i>`;
            video.pause()
            isPlaying = false;
        }
    });

    videoContainer.addEventListener("mouseenter", function () {
        videoContainer.addEventListener("mousemove", function (dets) {
            console.log("mouse enter");
            gsap.to(playbox, {
                left: dets.x - 100,
                top: dets.y - 250,
                duration: 0.3,
                ease: "power2.out"
            })
            CustomCursor.style.opacity = 0;


        });
    });
    videoContainer.addEventListener("mouseleave", function () {
        console.log("mouse leave");
        CustomCursor.style.opacity = 1;
    });
}

videoContaineranime();

// out project textanimation
function textanimation() {
    let ourProject = document.querySelector(".our-project")
    let projectSpan = document.querySelector(".project-span")
    let text = document.querySelector(".project-heading h3");
    tl.from(text, {
        y: 100,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: text,
            start: "top 100%",
            end: "bottom 100%",
            markers: false,
            scrub: 2,
        }
    })

    // tl.from(projectSpan, {
    //     width: 100,
    //     duration: 0.3,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //         trigger: text,
    //         start: "top 100%",
    //         end: "bottom 100%",
    //         markers: false,
    //         scrub: 2,
    //     }
    // })
}

textanimation()

function projectImgSheryEffect() {
    Shery.imageEffect(".project-img", {
        style: 6,
        // debug: true,
        gooey: true,



    });
}

projectImgSheryEffect();

Shery.imageEffect(".p-img", {
    style: 6,
    // debug: true,
    gooey: true,



});