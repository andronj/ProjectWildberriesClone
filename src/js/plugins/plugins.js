// Модалка корзины
// function _createModal(options) {
//     const modal = document.createElement('div');
//     modal.classList.add('modal');
//     modal.insertAdjacentHTML('afterbegin', `
//     <div class="modal-overlay">
//         <div class="modal-window">
//             <div class="modal-header">
//                 <span class="modal-title">Корзина</span>
//                 <span class="modal-close">&times;</span>
//             </div>
//             <div class="modal-body"></div>
//             <div class="modal-footer">
//                 <button class="clear-bag">Очистить корзину</button>
//             </div>
//         </div>
//     </div>
//   `)
//   document.body.appendChild(modal);
//   return modal;
// }

//модалка корзины
const modalBtns = document.querySelectorAll('.fa-basket-shopping');
const modals = document.querySelectorAll('._modal');
const body = document.body;
// const modalBasket = document.querySelector('.modal-callback__title');
// const productsAtBasket = [];


function openModal(elem) {
	elem.classList.add('_active');
	body.classList.add('_locked')
}

function closeModal(e) {
	if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
		e.target.closest('._modal').classList.remove('_active');
		body.classList.remove('_locked')
	}
}

modalBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let data = e.target.dataset.modalOpen;

		modals.forEach(modal => {
			if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
				openModal(modal)
			}
		})
	})
})

modals.forEach(modal => {
	modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e => {
	modals.forEach(modal => {
		if (e.key === "Escape" && modal.classList.contains('_active')) {
			modal.classList.remove('_active');
			body.classList.remove('_locked');
		}
	})
})

// function addToBasket(data) {
// 	cards.addEventListener('click', (event) =>{
// 		if (event.target.classList.contains('fa-bag-shopping')) {
// 			productsAtBasket.push({
// 				titleproduct: event.target.parentElement.parentElement.parentElement.id,
// 				price:event.target.parentElement.parentElement.parentElement.id,}
// 		)}
	
// 	return modalBasket.appendChild(productsAtBasket);
// }

	


//модалка быстрого просмотра
let cards = document.querySelector(".cards-root");
cards.addEventListener("click", (event) => {
    if (event.target.classList.contains("quick-view-btn")) {
      let quickViewWindow = document.querySelector(".dialog-window");
      quickViewWindow.show();
    }
  });
  cards.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-dialog")) {
      let quickViewWindow = document.querySelector(".dialog-window");
      quickViewWindow.close();
    }
  });
