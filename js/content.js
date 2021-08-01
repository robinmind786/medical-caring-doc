const reviews = [
	{
		id: 1,
		name: 'Robin Mind',
		address: 'Manikganj-1800',
		desc: 'We use Caring Doc services for a long time! All members of our family always make regular checkups in this medical center. Thir staff is kind and very careful. I highly recommend Caring Doc services if you take care about your health!',
		img: './img/profile/profile1.jpg',
	},
	{
		id: 2,
		name: 'Siddikur',
		address: 'New Your, CA',
		desc: 'We use Caring Doc services for a long time! All members of our family always make regular checkups in this medical center. Thir staff is kind and very careful. I highly recommend Caring Doc services if you take care about your health!',
		img: './img/profile/profile2.jpg',
	},
	{
		id: 3,
		name: 'John Cena',
		address: 'Losangles',
		desc: 'We use Caring Doc services for a long time! All members of our family always make regular checkups in this medical center. Thir staff is kind and very careful. I highly recommend Caring Doc services if you take care about your health!',
		img: './img/profile/profile3.jpg',
	},
];




const desc = document.getElementById('review_desc');
const name = document.getElementById('review_name');
const address = document.getElementById('review_address');
const img = document.getElementById('review_img');

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
	showPerson(currentItem);
});

function showPerson(person) {
	const reviewsItem = reviews[person];
	desc.textContent = reviewsItem.desc;
	name.textContent = reviewsItem.name;
	address.textContent = reviewsItem.address;
	img.src = reviewsItem.img;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});