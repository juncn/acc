let timeLineIndex = 1;

const preBtn = document.getElementById('pre-btn');
const nextBtn = document.getElementById('next-btn');

const moveTimeLine = direction => {
  if (direction === 'pre') {
    if (timeLineIndex > 1) {
      const nextElement = document.querySelector(
        `.progressbar li:nth-child(${timeLineIndex})`
      );
      nextElement.classList.remove('active');
      timeLineIndex--;
    }
  } else {
    if (timeLineIndex < 4) {
      const nextElement = document.querySelector(
        `.progressbar li:nth-child(${timeLineIndex + 1})`
      );
      nextElement.classList.add('active');
      timeLineIndex++;
    }
  }
};

nextBtn.addEventListener('click', () => {
  moveTimeLine('next');
  disableButton();
  $('.multiple-items').slick('slickNext');
});

preBtn.addEventListener('click', () => {
  moveTimeLine('pre');
  disableButton();
  $('.multiple-items').slick('slickPrev');
});

/* Disable button:
		if timeLineIndex === 1
			disable `pre` button
			enable 'next' button
		else if timeLineIndex === 4
			enable 'pre' button
			disable 'next' button
	  else 
			enable both button
*/

const disableButton = () => {
  if (timeLineIndex === 1) {
    preBtn.disabled = true;
    nextBtn.disabled = false;
  } else if (timeLineIndex === 4) {
    preBtn.disabled = false;
    nextBtn.disabled = true;
  } else {
    preBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2
});

$('.center-items').slick({
	centerMode: true,
	centerPadding: '60px',
  slidesToShow: 2,
})
