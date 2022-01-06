export default function productShortChoreo() {
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

    let master = gsap.timeline({
        delay: .7
    }) 
        .add(headingAnimation())
        .add(introTextAnimation(), "-=0.5")
        .add(projectStatsAnimation(), "-=2")
}