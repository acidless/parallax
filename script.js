const parallax = document.querySelector(".parallax");

document.onmousemove = function(e){
    const rotateY = (e.clientX - window.innerWidth / 2) * -0.01;
    const rotateX = (e.clientY - window.innerHeight / 2) * 0.01;

    parallax.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
}