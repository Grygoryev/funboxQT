var columns = document.getElementsByClassName('product-card__container');

function makeEqualHeight(columns) {
  var tallestColumn = 0;

  for (var i = 0; i < columns.length; i++) {
    if (columns[i].offsetHeight > tallestColumn) {
      tallestColumn = columns[i].offsetHeight;
    }
  }

  for (i = 0; i < columns.length; i++) {
    columns[i].style.minHeight = tallestColumn + 'px';
  }
}

makeEqualHeight(columns);


//------------------------------------------------------------------//
//making cards change color and content depending on mouse movements//
//------------------------------------------------------------------//

$(document).ready(function () {

  var card = $('.product-card'),
      cardHover = 'product-card_hover',
      cardSelected = ('product-card_selected'),
      cardSelectedHover = 'product-card_selected-hover',
      label = $('.product-card__label'),
      signature = $('.signature-origin'),
      signatureSelected = $('.signature-selected'),
      signatureHidden = ('signature-hidden');

  var cardClicked = false;
  var hoverPostPone = false;

  card.hover(function () {
    $(this).toggleClass(cardHover);
  });

  card.click(function () {

    if ($(this).hasClass('product-card_disabled')) {
      return false;
    }

    $(this).toggleClass(cardSelected);
    cardClicked = true;

    $(this).find(signature).toggleClass(signatureHidden);
    $(this).find(signatureSelected).toggleClass(signatureHidden);

    if (cardClicked) {
      $(this).removeClass(cardSelectedHover);
      $(this).find(label).html('Сказочное заморское яство');

      cardClicked = false;
      hoverPostPone = false;
    }

    $(this).mouseenter(function () {

      if (hoverPostPone && $(this).hasClass(cardSelected)) {
        $(this).addClass(cardSelectedHover);
        $(this).find(label).html('Котэ не одобряет?');
      }
    });

    $(this).mouseleave(function () {
      $(this).removeClass(cardSelectedHover);
      $(this).find(label).html('Сказочное заморское яство');
      hoverPostPone = true;
    });

  });
});
