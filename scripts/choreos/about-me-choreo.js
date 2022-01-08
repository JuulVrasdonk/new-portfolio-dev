export default function aboutMeChoreo() {
    function headingAnimation() {
        let tl = gsap.timeline();
        tl.from("header .wrapping-paper", {
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

    function imageAnimation() {
        if(window.matchMedia("(min-width: 576px)").matches) {
            let tl = gsap.timeline();
            tl.from(".image-of-me", {
                duration: 4,
                opacity: 0,
                y: 200,
                ease: "power4.out"
            })
            tl.from(".image-of-me", {
                scale: 1.2
            },"<")
        return tl;
        }
    }

    function navAppearance() {
        let tl = gsap.timeline()
        tl.from("nav, header > div", {
            duration: 2,
            ease: "power4.out",
            opacity: 0,
            stagger: .2
        })
        return tl
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

    gsap.from("main p:first-of-type", {
        scrollTrigger: {
            trigger: "main p:first-of-type",
            start: "top center+=10%"
        },
        duration: 2,
        ease: "power4.out",
        opacity: 0,
    })

    gsap.from("main strong", {
        scrollTrigger: {
            trigger: "main strong",
            start: "top center+=10%"
        },
        duration: 2,
        ease: "power4.out",
        opacity: 0,
    })

    gsap.from("main p:last-of-type, main h2", {
        scrollTrigger: {
            trigger: "main p:last-of-type",
            start: "top center+=10%"
        },
        duration: 2,
        ease: "power4.out",
        opacity: 0,
    })

    let master = gsap.timeline({
        delay: .7
    })
        .add(navAppearance())
        .add(headingAnimation(),"<")
        .add(imageAnimation(), "-=1")  
        .add(pinnedHeading())
}