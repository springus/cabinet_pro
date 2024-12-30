document.addEventListener('DOMContentLoaded', () => {
    introEffect()
    drEffect()
    skillsEffect()

})

function introEffect() {
    const introWrap = document.querySelector('#intro_wrap')
    const introInner = document.querySelector('#intro_inner')
    const introTitle = document.querySelector('#intro_title')
    const introText = document.querySelector('#intro_text')
    const introStart = document.querySelector('#intro_start')
    const introStartLi = document.querySelector('#intro_start').children
    // console.log(introStartLi)


    let currentIndex = 0;
    let countNum = 3;
    let countDownInterval;
    let count;

    init()
    initEvent()

    function init() {
        gsap.set(introStartLi[currentIndex], { y: "-50%", scale: 1.1, display: "none" })
        gsap.set(introStartLi[currentIndex + 1], { scale: 0.7, display: "none" })
    }

    function initEvent() {

        gsap.to(introTitle, { y: "100%", opacity: 0.3, scale: 0.5, duration: 3, ease: "power1.out", repeat: 1, yoyo: true, repeatDelay: 0.7, delay: 1.5 })
        gsap.to(introText, { y: "-100%", opacity: 1, scale: 1.5, duration: 3, ease: "power1.out", repeat: 1, yoyo: true, repeatDelay: 0.7, delay: 1.5 })



        startCountDown()

        function startCountDown() {
            count = document.createElement('li');
            introStart.appendChild(count);
            count.innerHTML = countNum;

            countDownInterval = setInterval(countDown, 1000);
        }

        function countDown() {
            if (countNum <= 0) {
                clearInterval(countDownInterval);
                count.parentNode.removeChild(count);
                gsap.to(introStartLi[currentIndex], {
                    y: 0, opacity: 0.2, scale: 0.8, display: "block", duration: 1.5, ease: "power1.out", onComplete: () => {
                        gsap.to(introStartLi[currentIndex], { opacity: 0, scale: 0, display: "block", duration: 1.5, ease: "power1.out" })
                    }
                })
                gsap.to(introStartLi[currentIndex + 1], { y: "-100%", scale: 1, display: "block", duration: 1.5, ease: "power1.out" })

                return;
            }

            countNum--;
            count.innerHTML = countNum;

        }

    }

}

function drEffect() {
    const introStart = document.querySelector('#intro_start')
    const drWrap = document.querySelector('#directional_wrap')
    const drInner = document.querySelector('#directional_inner')
    const drLi = document.querySelector('#directional_inner').children

    init()
    initEvent()

    function init() {
        gsap.set(drInner, { x: "-60%" })
    }

    function initEvent() {
        for (let i = 0; i < drLi.length; i++) {
            const item = drLi[i]
            // console.log(item)
            gsap.to(item, {
                x: i * 200, duration: 1, ease: "power1.out", scrollTrigger: {
                    trigger: item,
                    // markers: true,
                    start: "0% 0%",
                    end: "100% 0%",
                    scrub: 1,
                }
            })

        }

        gsap.to(drInner, {
            x: 0, duration: 1, ease: "power1.out", scrollTrigger: {
                trigger: drWrap,
                // markers: true,
                start: "0% 0%",
                end: "100% 0%",
                scrub: 1,
                pin: true,
            }
        })

    }

}

function skillsEffect() {
    const aboutWrap = document.querySelector('#about_wrap')
    const aboutBox = document.querySelector('#about_box')
    const skillsWrap = document.querySelector('#about_skills')
    const skillsInner = document.querySelector('#skills_inner')

    let endX = skillsInner.offsetWidth - document.documentElement.clientWidth

    gsap.set(skillsInner, { x: "100px"})

    gsap.to(skillsInner, {
        x: -endX, duration: 3, ease: "power1.out", scrollTrigger: {
            trigger: aboutWrap,
            // markers: true,
            start: `${aboutBox.offsetHeight} 0%`,
            end: `${endX} 0%`,
            scrub: 1,
            pin: true
        }
    })
}