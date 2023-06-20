const timer = document.getElementById('timer');
let hour, minute, seconds;
setInterval(()=>{
	const date = new Date();
	hour = date.getHours();
	AMPM = hour >= 12 ? 'PM' : 'AM';
	if(hour == 24) hour = '00';
	else if(hour > 12) hour = hour - 12;
	timer.innerText = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}, ${hour}:${date.getMinutes()}:${date.getSeconds()} ${AMPM}`;
}, 1000);