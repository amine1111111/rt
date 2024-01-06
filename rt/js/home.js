let boxes = document.querySelector(".boxes")

let sw = boxes.offsetWidth ;

document.querySelector(".right").addEventListener("click", _ => {
    boxes.scrollBy({
        left : sw,
        behavior : "smooth"
    })
})


document.querySelector(".left").addEventListener("click", _ => {
    boxes.scrollBy({
        left : -sw,
        behavior : "smooth"
})
})









setInterval( _ => {
    boxes.scrollBy({
        left : sw,
        behavior : "smooth"
    })
}, 15000)














let numbers = document.querySelectorAll(".number");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let number = entry.target;
        let start = 0;
        let end = parseInt(number.getAttribute("data-value"));

        let add = setInterval(() => {
          start += 1;
          number.textContent = start;
          if (start === end) {
            clearInterval(add);
            observer.unobserve(number)
          }
        }, 10);


      }
    });
  });

  numbers.forEach((n) => {
    observer.observe(n);
  });







































  let ssContainer = document.querySelector(".ssContainer");

let w = ssContainer.offsetWidth / 1.5 ;

document.querySelector(".nt").addEventListener("click", _ => {
    ssContainer.scrollBy({
        left : w,
        behavior : "smooth",
    })
})


document.querySelector(".pv").addEventListener("click", _ => {
    ssContainer.scrollBy({
        left : -w,
        behavior : "smooth",
    })
})























