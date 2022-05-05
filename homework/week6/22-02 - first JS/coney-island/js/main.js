let conie1 = document.querySelector('.img-1');
let conie2 = document.querySelector('.img-2');
let conie3 = document.querySelector('.img-3');
let conie4 = document.querySelector('.img-4');
let conie5 = document.querySelector('.img-5');
let conie6 = document.querySelector('.img-6');
let video = document.querySelector('video');

function stopVideos() {
	video.pause();
	video.currentTime = 0;
}

conie1.addEventListener('click', appendConie1);

function appendConie1() {
	video.src = 'resources/video/bing_bong.mp4';
	setTimeout(() => {
		video.src = '';
	}, 1000);
}

conie2.addEventListener('click', appendConie2);

function appendConie2() {
	video.src = 'resources/video/wassup_byren.mp4';
	setTimeout(() => {
		video.src = '';
	}, 2000);
}
conie3.addEventListener('click', appendConie3);

function appendConie3() {
	video.src = 'resources/video/fuck_yo_life.mp4';
	setTimeout(() => {
		video.src = '';
	}, 5000);
}
conie4.addEventListener('click', appendConie4);

function appendConie4() {
	video.src = 'resources/video/dont_die_for_free.mp4';
	setTimeout(() => {
		video.src = '';
	}, 1500);
}
conie5.addEventListener('click', appendConie5);

function appendConie5() {
	video.src = 'resources/video/bibibi.mp4';
	setTimeout(() => {
		video.src = '';
	}, 2000);
}
conie6.addEventListener('click', appendConie6);

function appendConie6() {
	video.src = 'resources/video/steve_jobs.mp4';
	setTimeout(() => {
		video.src = '';
	}, 4300);
}
