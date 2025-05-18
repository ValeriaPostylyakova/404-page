const containerInfo = document.querySelector('.page-404__info')
const containerImages = document.querySelector('.page-404__img')

document.addEventListener('DOMContentLoaded', animationElements)

function animationElements() {
	const tl = gsap.timeline()

	tl.from(containerInfo, {
		x: -1000,
		opacity: 0,
		duration: 1.5,
	}).from(
		containerImages,
		{
			delay: 0.8,
			opacity: 0,
			duration: 4,
		},
		0
	)
}
