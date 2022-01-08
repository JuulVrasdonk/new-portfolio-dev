export default function mainChoreo() {
  
    
    function headingAnimation() {
        let tl = gsap.timeline();
        tl.from(".heading > .overflow-hidden > .wrapping-paper", {
            duration: .8,
            y: -120,
            stagger: .2,
            ease: "power4.out",
            autoAlpha: 0,
            opacity: 0,
            scale: .9,
        })
        return tl
    }

    // About me image

    function imageAnimation() {
        if(window.matchMedia("(min-width: 576px)").matches) {
            let tl = gsap.timeline();
            tl.from(".about-me-link", {
                duration: 4,
                opacity: 0,
                y: 200,
                ease: "power4.out"
            })
            tl.from(".about-me-link", {
                scale: 1.2
            },"<")
        return tl;
        }
    }

    function pinnedHeading() {
        if(window.matchMedia("(min-width: 576px)").matches) {
            let tl = gsap.timeline();
            tl.to("h1", {
                y: 50,
                scrollTrigger: {
                    trigger: "h1", 
                    start: "top top+=15%",
                    end: "top top",
                    scrub: .7
                }
            })
            return tl;
        }
        
    }

    function navAppearance() {
        let tl = gsap.timeline()
        tl.from("nav, header > div", {
            duration: 1,
            ease: "power4.out",
            opacity: 0,
            stagger: .2
        })
        return tl
    }

    
    if(window.matchMedia("(min-width: 576px)").matches) {
        gsap.to("header > div",{
            y: -110,
            opacity: 0,
            scrollTrigger: {
                trigger: "h1", 
                start: "top top+=25%",
                end: "top top",
                scrub: .2
            }
        })
    }
        
 

    // ************ SEL WORK ************//



    gsap.from(".sel-work-heading .wrapping-paper", {
        scrollTrigger: {
            trigger: ".sel-work-heading .wrapping-paper",
            start: "top center"
        },
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9
    })

    let ubicompTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".ubicomp h3 .wrapping-paper",
            start: "top center+=20%"
         }
    })
    ubicompTl.from(".ubicomp h3 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from(".ubicomp ul, .ubicomp p", {
        duration: 2,
        ease: "power4.out",
        opacity: 0
    }, "-=0.5")
    
    let eurouteTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".euroute h3 .wrapping-paper",
            start: "top center+=20%"
         }
    })

    eurouteTl.from(".euroute h3 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from(".euroute  ul, .euroute p", {
        duration: 2,
        ease: "power4.out",
        opacity: 0
    }, "-=0.5")


    let fedTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".FED h3 .wrapping-paper",
            start: "top center+=20%",
         }
    })

    fedTl.from(".FED h3 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from(".FED  ul, .FED p", {
        duration: 2,
        ease: "power4.out",
        opacity: 0
    }, "-=0.5")

    let frontendAppsTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".Frontend-apps h3 .wrapping-paper",
            start: "top center+=20%",
         }
    })

    frontendAppsTl.from(".Frontend-apps h3 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from(".Frontend-apps  ul, .Buur p", {
        duration: 2,
        ease: "power4.out",
        opacity: 0
    }, "-=0.5")




    let master = gsap.timeline({
        delay: .7
    })
        .add(navAppearance())  
        .add(headingAnimation())
        .add(imageAnimation())
        .add(pinnedHeading())
}