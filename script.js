// document.querySelector(".main_agency").addEventListener("click", () => {
//

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".main_agency").addEventListener("click", e => {
        agencyAnimate(".agency_section", e.target.className)
        // animateColorer()
    })

    document.querySelector(".main_work").addEventListener("click", e => {
        agencyAnimate(".main_project_section", e.target.className)
        // animateColorer()
    })

    document.querySelector(".main_about").addEventListener("click", e => {
        agencyAnimate(".about_section", e.target.className)
        // animateColorer()
    })
})

const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque in assumenda, odio obcaecati quis reprehenderit."
const bgColors = {
    main_agency: "#2f434c",
    main_work: "#ec1358",
    main_about: "#5ebfea"
}

function agencyAnimate(element, colorClass) {
    let tl = gsap.timeline()
    let transitioner = document.querySelector(".agency_transitioner")

    transitioner.style.backgroundColor = bgColors[colorClass]

    tl
        .to(transitioner, {
            duration: 0,
            display: "block"
        })
        .to(transitioner, {
            // delay: 3,
            duration: 0.5,
            right: "0%"
        })
        .to(element, {
            // transform: 'scale(1)',
            duration: 0,
            display: "block",
            width: "100vw",
            zIndex: 2
            // delay: 5
        })
        .to(".main_agency h1, .main_work, .main_about", {
            zIndex: 0
        })
        .to(transitioner, {
            // backgroundColor: "#1890ff",
            // backgroundColor: "#5ebfea",
            backgroundColor: "#2ed8b1",
            duration: 0.4,
            left: "-110%",
            delay: -0.3
        })
        .to(".agency_title", {
            text: {
                value: "AGET",
                delimiter: "",
            },
            duration: 1,
            ease: Linear.easeNone,
            // duration: -0.1
        })
        .to(".agency_description", {
            text: {
                value: txt,
                delimiter: "",
            },
            duration: 2,
            ease: Linear.easeNone
        })
    // .to(".colorer", {
    //     delay: 3,
    //     zIndex: 0,
    //     duration: 1
    // })

}

function animateColorer() {
    let colors = ['#98348d', 'orangered', 'teal', 'yellow']
    let i = -1;
    setInterval(() => {
        i++
        if (i <= 4) {
            gsap.to(".project_section", {
                duration: 1,
                backgroundColor: colors[i]
            })
        } else {
            i = -1;
        }
    }, 1000);
}