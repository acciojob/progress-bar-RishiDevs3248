//your JS code here. If required.
let circles = document.querySelectorAll('.circle')

let next = document.getElementById('next')
let perv = document.getElementById('perv')
let count = 0;
next.addEventListener('click',()=>{
	if(count == 5){
		return;
	}
	count++;
	circles.forEach((cir)=>{
		cir.classList.remove('active')
	})
	let circle = document.getElementById(`circle-${count}`)
	circle.classList.add('active')
})
prev.addEventListener('click',()=>{
	if(count == 1){
		return;
	}
	count--;
	circles.forEach((cir)=>{
		cir.classList.remove('active')
	})
	let circle = document.getElementById(`circle-${count}`)
	circle.classList.add('active')
})

