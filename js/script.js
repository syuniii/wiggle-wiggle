$(document).ready(function(){

  let ww = $(window).width();

  AOS.init({});
  ScrollOut({});  
  

    //   타이핑 이벤트
  
    new TypeIt("#invite", {
      strings: "덩굴로 뒤덮인 우리의 검은 폐가로 당신을 초대합니다.",
      speed: 150,
      waitUntilVisible: true,
    }).go();
  
  //   가로 스크롤
  
    gsap.registerPlugin(ScrollTrigger);
  
    let sections = gsap.utils.toArray(".sec");
  
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
        trigger: ".h-container",
        pin: true,
        scrub: 0.1,
        end: "+=3000"
        }
    });
  
    gsap.set(".box-1, .box-2", {y: 100});
  
    //스크롤값 표시
    // ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});
  
    gsap.to(".box-1", {
    y: -130,
    duration: 2,
    ease: "elastic",
    scrollTrigger: {
        trigger: ".box-1",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset",
        id: "1",
    }
    });
  
    gsap.to(".box-2", {
    y: -120,
    ease: "none",
    scrollTrigger: {
        trigger: ".box-2",
        containerAnimation: scrollTween,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
        id: "2"
    }
    });

})
