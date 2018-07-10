var requestURL = '../../assets/json/productsData.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var productsData = request.response;
  showProductsData(productsData);
};

var productCards = document.querySelector('.products-catalog__body');

function showProductsData(jsonObj) {
  var products = jsonObj['products'];

  for (var i = 0; i < products.length; i++) {
    var productCard = document.createElement('figure');
    productCard.className = 'product-card';

    var productCardContainer = document.createElement('div');
    productCardContainer.className = 'product-card__container';

    var productCardHeader = document.createElement('header');
    productCardHeader.className = 'product-card__header';

    var productCardBody = document.createElement('div');
    productCardBody.className = 'product-card__body';

    var productCardFooter = document.createElement('footer');
    productCardFooter.className = 'product-card__footer';

    var label = document.createElement('p');
    label.className = 'product-card__label';

    var name = document.createElement('h2');
    name.className = 'product-card__name';

    var taste = document.createElement('h3');
    taste.className = 'product-card__taste';

    var quantity = document.createElement('p');
    quantity.className = 'product-card__quantity';

    var bonus = document.createElement('p');
    bonus.className = 'product-card__bonus';

    var customerState = document.createElement('p');
    customerState.className = 'product-card__customer-state';

    var weight = document.createElement('div');
    weight.className = 'product-card__weight';

    var weightMeasure = document.createElement('div');
    weightMeasure.className = 'product-card__weight-measure';

    var available = products[i].available;

    label.textContent = products[i].label;
    name.textContent = products[i].name;
    taste.textContent = products[i].taste;
    quantity.textContent = products[i].quantity;
    bonus.textContent = products[i].bonus;
    weight.textContent = products[i].weight;
    weightMeasure.textContent = products[i].weightMeasure;
    customerState.textContent = products[i].customerState;

    productCard.appendChild(productCardContainer);
    productCardContainer.appendChild(productCardHeader);
    productCardContainer.appendChild(productCardBody);
    productCardContainer.appendChild(productCardFooter);

    productCardHeader.appendChild(label);

    productCardBody.appendChild(name);
    productCardBody.appendChild(taste);
    productCardBody.appendChild(quantity);
    productCardBody.appendChild(bonus);

    productCardFooter.appendChild(weight);
    weight.appendChild(weightMeasure);

    if ("customerState" in products[i]) {
      productCardBody.appendChild(customerState)
    }

    if (available === false) {
      productCard.className = 'product-card product-card_disable';
    }

    productCards.appendChild(productCard);
  }
}