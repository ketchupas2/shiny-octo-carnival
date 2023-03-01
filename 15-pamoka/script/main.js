const visual = document.querySelector('#visual');

window.addEventListener('mousemove', function(event){
    // console.log('paspaudimas');
    // console.log(event.pageX, event.pageY);

    visual.style.transform = `translate(${event.pageX/100}px, ${event.pageY/100}px)`;
});