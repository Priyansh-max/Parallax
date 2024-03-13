const parallax_el = document.querySelectorAll(".parallax");

 let xvalue = 0;
 let yvalue = 0;

 function update(cursorPosition){
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;

        let isleft = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1;

        let zvalue = (cursorPosition- parseFloat(getComputedStyle(el).left))*isleft *0.1;

        el.style.transform =  `translateX(calc(-50% + ${xvalue*speedx}px)) 
        translateY(calc(-50% + ${yvalue*speedy}px)) 
        perspective(2300px) translateZ(${zvalue*speedz}px)`;

    });
 }

 update(0);

 window.addEventListener("mousemove",(e) =>{
    xvalue = e.clientX - window.innerWidth / 2;
    yvalue = e.clientY - window.innerHeight / 2;

    console.log(xvalue,yvalue);
    update(e.clientX)
    
 });
        