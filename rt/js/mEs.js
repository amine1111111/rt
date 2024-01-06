


let movedElements = document.querySelectorAll(".movedElement")



let Ao = new IntersectionObserver(entries  => {

    entries.forEach(entry => {
        if(entry.isIntersecting)entry.target.classList.add("showdiv")
    })
})



movedElements.forEach(one => {
    Ao.observe(one)
})