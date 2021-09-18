reviews = [
	{
		pic: "1.jpg",
		name: "Khod",
		profession: "Retard",
		comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
	},
	{
		pic: "2.jpg",
		name: "Hassium",
		profession: "CEO Of Pakistan",
		comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
	},
	{
		pic: "3.jpg",
		name: "Inscrutable",
		profession: "Inter Retard",
		comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
	},
	{
		pic: "4.jpg",
		name: "DRT1",
		profession: "Dipshit",
		comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
	},
	{
		pic: "5.jpg",
		name: "RealRed",
		profession: "Teacher",
		comment: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"
	}
]

// const div = document.querySelector('.review');
const img = document.querySelector('img');
const name = document.querySelector('h2');
const profession = document.querySelector('h4');
const review = document.querySelector('p');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
let count = 0;

window.addEventListener('load', () => {
	img.src = "imgs/" + reviews[count].pic;
	name.innerText = reviews[count].name;
	profession.innerText = reviews[count].profession;
	review.innerText = reviews[count].comment;
	name.style.left = 0;
	profession.style.left = 0;
	review.style.left = 0;
})

nextButton.addEventListener('click', () => {
	if (count < 4) {

		count += 1;

		img.style.opacity = 0;
		name.style.opacity = 0;
		profession.style.opacity = 0;
		review.style.opacity = 0;
		name.style.left = "-3rem";
		profession.style.left = "-3rem";
		review.style.left = "-3rem";

		setTimeout(() => {

			img.src = "imgs/" + reviews[count].pic;
			name.innerText = reviews[count].name;
			profession.innerText = reviews[count].profession;
			review.innerText = reviews[count].comment;

			img.style.opacity = 1;
			name.style.opacity = 1;
			profession.style.opacity = 1;
			review.style.opacity = 1;
			name.style.left = 0;
			profession.style.left = 0;
			review.style.left = 0;

		}, 200)

	} else {
		// dance
	}
})

previousButton.addEventListener('click', () => {
	if (count > 0) {

		count -= 1;

		img.style.opacity = 0;
		name.style.opacity = 0;
		profession.style.opacity = 0;
		review.style.opacity = 0;
		name.style.left = "-3rem";
		profession.style.left = "-3rem";
		review.style.left = "-3rem";

		setTimeout(() => {

			img.src = "imgs/" + reviews[count].pic;
			name.innerText = reviews[count].name;
			profession.innerText = reviews[count].profession;
			review.innerText = reviews[count].comment;

			img.style.opacity = 1;
			name.style.opacity = 1;
			profession.style.opacity = 1;
			review.style.opacity = 1;
			name.style.left = 0;
			profession.style.left = 0;
			review.style.left = 0;

		}, 200)

	} else {
		// dance
	}
})