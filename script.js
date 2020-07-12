// document.querySelector(".main_agency").addEventListener("click", () => {
//

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".main_agency").addEventListener("click", () => {
        agencyAnimate()
        animateColorer()
    })
})

const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque in assumenda, odio obcaecati quis reprehenderit."

function agencyAnimate() {
    let tl = gsap.timeline()
    tl
        .to(".agency_transitioner", {
            duration: 0,
            display: "block"
        })
        .to(".agency_transitioner", {
            // delay: 3,
            duration: 0.9,
            right: "0%"
        })
        // .to(".agency_transitioner", {
        //     duration: 0.9,
        //     right: "0%"
        // })
        .to(".agency_section", {
            // transform: 'scale(1)',
            duration: 0,
            display: "block"
            // delay: 5
        })
        .to(".agency_transitioner", {
            backgroundColor: "#1890ff",
            duration: 0.9,
            left: "-110%"
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
    }, 1500);
}