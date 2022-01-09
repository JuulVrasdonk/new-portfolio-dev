export default function productLongChoreo() {
    function headingAnimation() {
        let tl = gsap.timeline();
        tl.from("h1 .wrapping-paper", {
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
    function introTextAnimation() {
        let tl = gsap.timeline();
        tl.from("header > div div:first-of-type p", {
            duration: 2,
            ease: "power4.out",
            opacity: 0
        })
        return tl;
    }

    function projectStatsAnimation() {
        let tl = gsap.timeline();

        tl.from("header > div ul li", {
            duration: 2,
            ease: "power4.out",
            opacity: 0,
            stagger: .2
        })
        return tl;
    }

    if(window.matchMedia("(min-width: 576px)").matches) {
        gsap.to(".scroll",{
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

    function iterationalTl() {
        function textAppearance() {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "main section:first-of-type article",
                    start: "center-=20% center"
                }
            });
            tl.from("main section:first-of-type article h2 .wrapping-paper", {
                duration: .8,
                y: -120,
                stagger: .2,
                ease: "power4.out",
                autoAlpha: 0,
                opacity: 0,
                scale: .9
            })
            tl.from("main section:first-of-type article p", {
                duration: 2,
                ease: "power4.out",
                opacity: 0
            }, "-=0.5")
        }

        function pinnedIterationSection() {
            if(window.matchMedia("(min-width: 576px)").matches) {
                let desktopTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "main .iterational",
                        start: "center center",
                        end: "bottom+=100% top",
                        pin: true,
                        // markers: true
                    }
                });
                return desktopTl;
            } else {
                let mobileTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "main .iterational",
                        start: "center-=15% center",
                        end: "bottom+=100% top",
                        pin: true,
                        // markers: true
                    }
                })
                return mobileTl;
            }
        }

        function imageSlider() {
            if(window.matchMedia("(min-width: 576px)").matches) {
                let desktopTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "main .iterational",
                        start: "center center",
                        end: "bottom+=100% top",
                        scrub: 1,
                        // markers: true
                    }
                })
                desktopTl.from("main .iterational ul li:first-of-type ul", {
                    x: 750,
                    ease: "power2.InOut"
                })
                desktopTl.from("main .iterational ul li:nth-of-type(2) ul", {
                    x: -800,
                    ease: "power2.InOut"
                },"<")
                desktopTl.from("main .iterational ul li:last-of-type ul", {
                    x: 2000,
                    ease: "power2.InOut"
                },"<")

                return desktopTl
            } else {
                let mobileTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "main .iterational",
                        start: "center-=15% center",
                        end: "bottom+=100% top",
                        scrub: 1,
                        // markers: true
                    }
                })
                mobileTl.from("main .iterational ul li:first-of-type ul", {
                    x: 750,
                    ease: "power2.InOut"
                })
                mobileTl.from("main .iterational ul li:nth-of-type(2) ul", {
                    x: -800,
                    ease: "power2.InOut"
                },"<")
                mobileTl.from("main .iterational ul li:last-of-type ul", {
                    x: 1000,
                    ease: "power2.InOut"
                },"<")

                return mobileTl
            }
        }   

        let tl = gsap.timeline()
            .add(textAppearance())
            .add(pinnedIterationSection())
            .add(imageSlider())

        return tl
    }

    function multideviceTl() {
        function textAppearance() {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "main .multidevice article",
                    start: "center-=15% center"
                }
            });
            tl.from("main .multidevice article h2 .wrapping-paper", {
                duration: .8,
                y: -120,
                stagger: .2,
                ease: "power4.out",
                autoAlpha: 0,
                opacity: 0,
                scale: .9
            })
            tl.from("main .multidevice article p", {
                duration: 2,
                ease: "power4.out",
                opacity: 0
            }, "-=0.5")
        }

        let tl = gsap.timeline()
            .add(textAppearance())
        return tl
    }

    function lottieApearance() {
        if(window.matchMedia("(min-width: 576px)").matches) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "main .multidevice article",
                    start: "center-=15% bottom",
                    scrub: 1
                }
            });
            tl.from("main .multidevice .responsive-anim", {
                opacity: 0,
                ease: "power1.out"
            })
        }
    }

    let master = gsap.timeline({
        delay: 1
    }) 
        .add(headingAnimation())
        .add(introTextAnimation(), "-=0.5")
        .add(projectStatsAnimation(), "-=2")
        .add(iterationalTl())
        .add(multideviceTl())
        .add(lottieApearance())
}