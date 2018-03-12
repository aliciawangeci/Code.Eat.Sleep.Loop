function setDate() {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	document.querySelector(".hour").innerHTML =
		hours < 10 ? "0" + hours.toString() : hours.toString();
	document.querySelector(".minutes").innerHTML =
		minutes < 10 ? "0" + minutes.toString() : minutes.toString();
	document.querySelector(".seconds").innerHTML =
		seconds < 10 ? "0" + seconds.toString() : seconds.toString();
}

setInterval(setDate, 1000);
