const GradientBody = document.querySelector('.gradientbody');
const GradientBodyText = GradientBody.firstElementChild;
const GradientValue = document.querySelector('.gradient-value');
const GradientsContainer = document.querySelector('.items-container');
const Gradients = [
	{
		clr1: "#c2e59c",
		clr2: "#64b3f4",
		direction: "63deg"
	},
	{
		clr1: "#2980b9",
		clr2: "#2c3e50",
		direction: "270deg"
	},
	{
		clr1: "#5A3F37",
		clr2: "#2C7744",
		direction: "54deg"
	},
	{
		clr1: "#4DA0B0",
		clr2: "#D39D38",
		direction: "163deg"
	},
	{
		clr1: "#5614B0",
		clr2: "#DBD65C",
		direction: "180deg"
	},
	{
		clr1: "#2F7336",
		clr2: "#AA3A38",
		direction: "180deg"
	},
	{
		clr1: "#8E0E00",
		clr2: "#1F1C18",
		direction: "180deg"
	},
	{
		clr1: "#114357",
		clr2: "#F29492",
		direction: "180deg"
	},
	{
		clr1: "#fd746c",
		clr2: "#ff9068",
		direction: "180deg"
	},
	{
		clr1: "#eacda3",
		clr2: "#d6ae7b",
		direction: "180deg"
	},
	{
		clr1: "#6a3093",
		clr2: "#a044ff",
		direction: "180deg"
	},
];

//this generataes gradient items automatically from the GradientsArray.
for(let i = 0; i < Gradients.length; i++) {
	GradientsContainer.innerHTML += '<div class="gradient-item"></div>'
}

//this declare those items as GradientItem After generating them, declaring them before the loop will not work because when this stattement gets executed, there are no items yet in DOM.
const GradientItem = document.querySelectorAll('.gradient-item');

const GradientGen = () => {

	////this converts nodelist to array so we can use array methods on it like .map or .foreach
	let GradientItemArray = Array.prototype.slice.call(GradientItem);
	
	GradientItemArray.map((item, i) => {

		GradientItemArray[i].style.background = "linear-gradient(" + Gradients[i].direction + "," + Gradients[i].clr1 + "," + Gradients[i].clr2 + ")";
		GradientItemArray[i].addEventListener('click', (event) => {
			let ClickedItem = event.target;
			ClickedItemBackground = ClickedItem.style.background;
			GradientBody.style.background = ClickedItemBackground;
			GradientValue.innerText = GradientBody.style.background + ";" ;
		})
	})

	//Gradient Body Color Copy Feature;
	GradientBody.addEventListener('click', () => {
		navigator.clipboard.writeText(GradientBodyText.innerText);
	});

	//default big gradient body thingy
	GradientBody.style.background = "linear-gradient(" + Gradients[0].direction + "," + Gradients[0].clr1 + "," + Gradients[0].clr2 + ")"; //gradient
	GradientValue.innerText = GradientBody.style.background + ";" ; ///text

}

window.addEventListener('load', () => {
	GradientGen();
})

// function rotate_deg() {
// 	let a = document.getElementsByClassName('a')[0];
// 	a_deg = "180deg";
// 	a_clr1 = "red";
// 	a_clr2 = "pink";
// 	a.style.background = "linear-gradient(" + a_deg + "," + a_clr1 + "," + a_clr2 + ")";
// }

// document.getElementsByClassName('a')[0].addEventListener('click', rotate_deg());