function startAnimation() {
  anime({
    targets:'#animation-box',
    translateX: function () {
      return anime.random(0, 600);
    },
    easing:`easeInOutQuad`,
    duration:750,
    complete:startAnimation
  });
}
