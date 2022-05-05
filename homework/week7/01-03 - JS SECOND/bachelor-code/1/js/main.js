document.querySelector('#finalRose').addEventListener('click', removeLosers);

function removeLosers() {
	document.querySelector('#claire').classList.add('hidden');
	document.querySelector('#sharleen').classList.add('hidden');
}
