const aboutPicture = document.querySelector('.about-section-imgs');
const aboutText = document.querySelector('.about-section-text');
const storyButton = document.getElementsByClassName('about-button')[0];
const inspirationButton = document.getElementsByClassName('about-button')[1];
const qualityButton = document.getElementsByClassName('about-button')[2];
const storyImage = "url(imgs/story.jpg)";
const inspirationImage = "url(imgs/inspiration.jpg)";
const qualityImage = "url(imgs/quality.jpg)";
const storyHeading = "FOR THE LOVE OF LEATHER";
const inspirationHeading = "EVERYDAY INSPIRATION";
const qualityHeading = "GUARANTEED AUTHENTICITY";
const storyText = "Our enduring passion for natural leather prompted us to officially launch Nextag in 2001 as a retailer of premium quality leather goods in Pakistan. The commitment to stay on the cutting edge is a combination of an innovating approach and our long heritage of leather & textile manufacturing, tracing the foundation back to a trading house of leather hides set up in the early 1900s.";
const inspirationText = "Our determination to create timeless and authentic masterpieces has been inspired by the ever-growing demands and needs of our valued clientele. We experiment with leather designs and styles to provide modern yet lasting products that truly combine form and function. Be it a routine every-day item, a high-fashion accessory or a business essential, Nextag strives to offer a little something for everyone.";
const qualityText = "To provide you with the luxurious feel of genuine leather, our premium materials are sourced from the best tanneries and suppliers. Each product is constructed through many hours of mastery and craftsmanship that justifies its exclusivity and charm for those who want to stand out. The attention to detail is ensured by a skilled & motivated team of experts, and technological support, to provide you with a genuine leather item that can last a lifetime.";

storyButton.addEventListener("click", () => {

	aboutPicture.style.backgroundImage = storyImage;
	aboutText.innerHTML = 
						"<h2>" + storyHeading + "</h2>" +
						"<p>" + storyText + "</p>";
	storyButton.className = "about-section-main-button-active";
	inspirationButton.className = "about-button";
	qualityButton.className = "about-button";
})

inspirationButton.addEventListener("click", () => {
	aboutPicture.style.backgroundImage = inspirationImage;
	aboutText.innerHTML =
						"<h2>" + inspirationHeading + "</h2>" +
						"<p>" + inspirationText + "</p>";
	storyButton.className = "about-button";
	inspirationButton.className = "about-section-main-button-active";
	qualityButton.className = "about-button";
})

qualityButton.addEventListener("click", () => {
	aboutPicture.style.backgroundImage = qualityImage;
	aboutText.innerHTML =
						"<h2>" + qualityHeading + "</h2>" +
						"<p>" + qualityText + "</p>";
	storyButton.className = "about-button";
	inspirationButton.className = "about-button";
	qualityButton.className = "about-section-main-button-active";
})


// Requirement Specification:
// The Web site is to be created based on the following requirements.

// 1)	The Home Page should be created with proper sections and with a suitable logo.
// 2)	Home Page should contain details on Purse and Wallets with suitable images. 
// 3)	The site should display a menu which will contain the options for brief introduction about the various purse and wallets available, location of the shop and any other information if required.
// 4)	The information should be categorized according to the brand names of the products like if a User wants to see only “LOUIS VUITTON” products or any other companies products then he/she can click on a Link/button/menu etc and can see only that Brand products.
// 5)	When a user selects any particular brand, a list of products for that brand will be displayed
// 6)	A brief summary of features of individual products should be displayed on the Web Page along with the product but detailed Features should be stored in Individual Word documents which can be downloaded or viewed by the User who wishes to see the same.
// 7)	The user should also be able to compare the various products of different as well as similar brands.
// 8)	There should be a “Contact Us” page which will have the Address of the Company which is as follows and the mail address which when clicked will invoke the local mail client from where they can send an email.
