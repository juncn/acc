const service_timeline = document.getElementById('services-timeline');

const services_slider = tns({
  container: '.services-slider',
  items: 2,
  speed: 500,
  gutter: 50,
  autoplay: false,
  center: true,
  loop: false,
  swipeAngle: false,
  nav: false
});

const gotoSlide = slideNum => {
  services_slider.goTo(slideNum);
};

const updateActiveList = currentSlideNum => {
  // console.log('currentSlideNum:', currentSlideNum);
  // any dot less than `currentSlideNum` should have an `actice` class
  // any dot greater than `currentSlideNum` should not have `active` class

  // Approach 1:
  // i start from 1 as first dot should always has the `active` class
  // let classes = null;
  // for (let i = 1; i < service_timeline.childElementCount; i++) {
  //   classes = service_timeline.children[i].classList;
  //   if (i < currentSlideNum && !classes.contains('active')) {
  //     classes.add('active');
  //   } else if (i > currentSlideNum - 1 && classes.contains('active')) {
  //     classes.remove('active');
  //   }
  // }

  // Approach 2:
  const lists = [...service_timeline.children];
  lists.forEach(list => {
    const classes = list.classList;
    if (list.value <= currentSlideNum && !classes.contains('active')) {
      classes.add('active');
    } else if (list.value > currentSlideNum && classes.contains('active')) {
      classes.remove('active');
    }
  });
};

service_timeline.addEventListener('click', event => {
  updateActiveList(event.target.value);
  gotoSlide(event.target.value);
});

services_slider.getInfo().prevButton.addEventListener('click', () => {
  updateActiveList(services_slider.getInfo().index - 1);
});

services_slider.getInfo().nextButton.addEventListener('click', () => {
  updateActiveList(services_slider.getInfo().index + 1);
});
