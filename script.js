window.onload = function () {
	document.addEventListener('click', documentActions)

	function documentActions(e) {
		if (e.target.classList.contains('menu__arrow')) {
			e.target.closest('.menu__item').classList.toggle('_hover')
		}


		if (e.target.classList.contains('search__icon')) {
			document.querySelector('.search__row').classList.toggle('_active')
		} else if (!e.target.closest('.search__row') && document.querySelector('.search__row._active')) {
			document.querySelector('.search__row').classList.remove('_active')
		}

		if (e.target.classList.contains('icon-menu')) {
			document.querySelector('.menu__body').classList.toggle('_active')
			document.body.classList.toggle('_lock')
		} else if (!e.target.closest('.menu__body') && document.querySelector('.menu__body._active')) {
			document.querySelector('.menu__body').classList.remove('_active')
		}
	}
	new Swiper('.slider-rooms__body', {
		observer: true,
		observerParents: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		speed: 800,
		loop: true,
		watchOverflow: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		navigation: {
			nextEl: '.slider-rooms .slider-arrow_next',
			prevEl: '.slider-rooms .slider-arrow_prev',
		},
		pagination: {
			el: '.slider-rooms .slider-rooms__dots',
			clickable: true,
		},

	});
}

const productsGrid = document.querySelector('.products__cards')

const products = [
	{
		id: 1,
		name: 'Syltherine',
		text: 'Stylish cafe chair',
		price: 2500000,
		fullPrice: 3500000,
		imageUrl: './img/products/01.png',
		isNew: false,
	},
	{
		id: 2,
		name: 'Leviosa',
		text: 'Stylish cafe chair',
		price: 2500000,
		fullPrice: 2500000,
		imageUrl: './img/products/02.png',
		isNew: false,
	},
	{
		id: 3,
		name: 'Lolito',
		text: 'Luxury big sofa',
		price: 7000000,
		fullPrice: 14000000,
		imageUrl: './img/products/03.png',
		isNew: false,
	},
	{
		id: 4,
		name: 'Respira',
		text: 'Minimalist fan',
		price: 5e6,
		fullPrice: 5e6,
		imageUrl: './img/products/04.png',
		isNew: false,
	},
	{
		id: 5,
		name: 'Grifo',
		text: 'Night lamp',
		price: 15e5,
		fullPrice: 15e5,
		imageUrl: './img/products/05.png',
		isNew: false,
	},
	{
		id: 6,
		name: 'Muggo',
		text: 'Small mug',
		price: 15e4,
		fullPrice: 15e4,
		imageUrl: './img/products/06.png',
		isNew: false,
	},
	{
		id: 7,
		name: 'Pingky',
		text: 'Cute bed set',
		price: 7e6,
		fullPrice: 14e6,
		imageUrl: './img/products/07.png',
		isNew: false,
	},
	{
		id: 8,
		name: 'Potty',
		text: 'Minimalist flower pot',
		price: 5e5,
		fullPrice: 5e5,
		imageUrl: './img/products/08.png',
		isNew: true,
	},
]

showProducts()

function showProducts() {
	productsGrid.innerHTML = products.map(buildProductCard).join('')
}

function buildProductCard(product) {
	const { id, name, text, price, fullPrice, imageUrl, isNew } = product
	const percent = Math.floor((price - fullPrice) / fullPrice * 100) + "%"
	const onSale = price < fullPrice
	return `
		<li data-id="${id}" class="products__card product">
			<a href="#" class="product__content">
				<div class="product__image-wrapper">
					<img class="product__image" src="${imageUrl}" alt="">
					${isNew ? '<b class="product__badge badge-new">New</b>' : onSale ? `<b class="product__badge badge-sale">${percent}</b>` : ''}
				</div>

				<div class="product__info">
					<h4 class="product__title">${name}</h4>
					<p class="product__text">${text}</p>
					<div class="product__prices">
						<strong class="product__price">${price}</strong>
						${onSale ? `<s class="product__full-price">${fullPrice}</s>` : ""}
					</div>
				</div>
			</a>

			<div class="product__overlay">
				<button class="product__buy-button">Add to cart</button>
				<button class="product__share-button _icon-share">Share</button>
				<button class="product__like-button _icon-favorite">Like</button>
			</div>
		</li>
	`
}