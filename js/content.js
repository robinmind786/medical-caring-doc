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


const news = [
	{
		id: 1,
		news_title: 'Curabitur egestas malesuada',
		news_date: 'July 12, 2021',
		news_desc: 'Americans oftentimes ignore some basic, daily routines of oral hygiene, that need to be upheld. Practicing healthy habits...',
		news_img: './img/news/01.jpg',
	},
	{
		id: 2,
		news_title: 'Sed elementum sodales',
		news_date: 'July 12, 2021',
		news_desc: 'Americans oftentimes ignore some basic, daily routines of oral hygiene, that need to be upheld. Practicing healthy habits...',
		news_img: './img/news/02.jpg',
	},
	{
		id: 3,
		news_title: 'Donec cursus ex eu elementum',
		news_date: 'July 12, 2021',
		news_desc: 'Americans oftentimes ignore some basic, daily routines of oral hygiene, that need to be upheld. Practicing healthy habits...',
		news_img: './img/news/03.jpg',
	},
];


const sectionCenter = document.querySelector('.news-section');

window.addEventListener('DOMContentLoaded', function(){
	let displayMenu = news.map(function(item){
		return `
        <div class="news-item">
          <div class="news-item-content">
            <div class="news-img">
              <img src=${item.news_img}>
            </div>
            <div class="news-info">
              <div class="news-heading">
                <a href="#"><h2 class="section-title">${item.news_title}</h2></a>
              </div>
              <div class="news-date">
                <p><i class="fa fa-calendar"></i>  ${item.news_date}</p>
              </div>
              <div class="news-desc">
                <p class="section-desc">${item.news_desc}</p>
              </div>
            </div>
          </div>
        </div>
		`;
	});
	displayMenu = displayMenu.join('');
	sectionCenter.innerHTML = displayMenu;

});







const doctor = [
	{
		id: 1,
		skill: 'CONSULTING DOCTOR',
		name: 'Dr. Sarah Johnson',
		phone: '+82682 2458',
		email: 'sara@gmail.com',
		address: 'santa monica, ca',
		desc: '"Comparing teeth whitening prices here and elsewhere, I picked BeClinic. The result was beyond my expectations!"',
		img: './img/team-1.jpg',
	},
	{
		id: 2,
		skill: 'DENTAL HYGIENIST',
		name: 'Dr. Greg House',
		phone: '+98564200',
		email: 'greg@gmail.com',
		address: 'santa monica, ca',
		desc: '"Comparing teeth whitening prices here and elsewhere, I picked BeClinic. The result was beyond my expectations!"',
		img: './img/team-2.jpg',
	},
	{
		id: 3,
		skill: 'PEDIATRICIAN',
		name: 'Dr. Marta Stewart',
		phone: '+0178965',
		email: 'marta@gmail.com',
		address: 'santa monica, ca',
		desc: '"Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity."',
		img: './img/team-3.jpg',
	},
	{
		id: 4,
		skill: 'CARDIAC SURGEON',
		name: 'Dr. Night Shyamala',
		phone: '+826dd82 2d458',
		email: 'night@gmail.com',
		address: 'santa monica, ca',
		desc: '"Taking my kids to a dentist has never been easier. They just loved the welcoming and warm atmosphere in there!"',
		img: './img/team-4.jpg',
	},
];

const teamCenter = document.querySelector('.team-center');

window.addEventListener('DOMContentLoaded', function(){
	let displayDoctor = doctor.map(function(doctorItem){
		return `
          <div class="item-content">
            <div class="team-content">
              <div class="team-img">
                <img src=${doctorItem.img}>
                <div class="overlay">
                  <div class="team-social">
                    <ul>
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="team-info">
                <div class="skill">
                  <h6>${doctorItem.skill}</h6>
                </div>
                <div class="team-name">
                  <h4><a href="#">${doctorItem.name}</a></h4>
                </div>
                <div class="team-phone">
                  <h5><i class="fa fa-mobile"></i> ${doctorItem.phone}</h5>
                </div>
                <div class="team-email">
                  <h5><i class="fa fa-envelope"></i> ${doctorItem.email}</h5>
                </div>
              </div>
            </div>
          </div>
		`;
	});
	displayDoctor = displayDoctor.join('');
	teamCenter.innerHTML = displayDoctor;
});