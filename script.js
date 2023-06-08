'use strict'
const itemsContainer = document.getElementById('items')
const getProducts = () => {
  return fetch('https://dummyjson.com/products?limit=12&skip=3')
   .then( response => response.json())
   .then( data => data)
   .catch (error => error)
}
const displaProducts = async () => {
    const productsGotten = await getProducts()
    console.log(productsGotten)
    productsGotten.products.map(item => {
        let div = document.createElement('div')
        let image = document.createElement('img')
        let title = document.createElement('h2')
        let price = document.createElement('p')
        let discount = document.createElement('p')
        let button = document.createElement('button')
        let addCart = document.createElement('div')
        button.textContent = 'Add to Cart'
        addCart.className = 'div-add'

        image.src = item.images[1];
        button.className = 'btn';
        image.className = 'img-prod';
        price.className = 'price';
        discount.className = 'discount'
        discount.textContent = `${item.discountPercentage} %`;
        title.textContent = item.title;
        price.textContent = `Price $${item.price}`;
        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(discount)
        div.appendChild(button)
        addCart.appendChild(price)
        addCart.appendChild(button)
        div.appendChild(addCart)
        div.setAttribute('key', item.id);
        div.setAttribute('class', 'product')

        itemsContainer.appendChild(div);
    })
}
displaProducts()