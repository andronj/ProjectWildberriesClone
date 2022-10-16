async function getData() {
    const response = await fetch('https://634a971833bb42dca406ee5a.mockapi.io/cards');
    return await response.json();
}



function renderCard(item){
    const template = document.getElementById('card').content.cloneNode(true);

    const img = template.querySelector('.card img');
    const price = template.querySelector('.price');
    const title = template.querySelector('.title');
    const quickViewImg = template.querySelector('.quick-view-img img');
    img.src = item.src;
    price.textContent = item.price;
    title.textContent = item.title;
    quickViewImg.src = item.src;
    


    return template;
}

getData().then(data => {
    //Преобразовывае данные в html элементы
    const cardsNote = data.map(renderCard);

    //Отрисовываем наши карточки в DOM
    const CardRoot = document.querySelector('.cards-root');
    CardRoot.append(...cardsNote);
});






