//your JS code here. If required.
let circles = document.querySelectorAll('.circle')

let next = document.getElementById('next')
let prev = document.getElementById('prev')
let count = 1;
next.addEventListener('click',()=>{
	count++;
	if(count == 5){
	    next.disabled = count === circles.length
	}
	
	             
	circles.forEach((cir)=>{
		cir.classList.remove('active')
	})
	let circle = document.getElementById(`circle-${count}`)
	circle.classList.add('active')
})
prev.addEventListener('click',()=>{
	count--;
	if(count == 1){
		prev.disabled = count === 1;   
	}
	circles.forEach((cir)=>{
		cir.classList.remove('active')
	})
	let circle = document.getElementById(`circle-${count}`)
	circle.classList.add('active')
})

