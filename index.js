anime({
    targets: '.box',
    translateX: 250,
    rotate: '2turn',
    duration: 10000,
    loop: true
});

anime({
    targets: '.rod',
    rotate: [60, -60], // from 60 to -60 degrees
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
});    

anime({
    targets: '.segment',
    width: 20,
    duration: 300,
    easing: 'linear',
    delay: function(el, i, l) {
      return i * 500;
    },
    endDelay: 500,
    loop: true
  });          