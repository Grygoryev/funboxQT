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


//------------------------------------------------------//
//making cards change color depending on mouse movements//
//------------------------------------------------------//

$(document).ready(function () {

  var card = $('.product-card'),
      cardHover = 'product-card_hover',
      cardSelected = ('product-card_selected'),
      cardSelectedHover = 'product-card_selected-hover';

  var cardClicked = false;
  var hoverPostPone = false;

  card.hover(function () {
    $(this).toggleClass(cardHover);
  });

  card.click(function () {

    $(this).toggleClass(cardSelected);
    cardClicked = true;

    if (cardClicked) {
      $(this).removeClass(cardSelectedHover);
      cardClicked = false;
      hoverPostPone = false;
    }

    $(this).mouseenter(function () {

      if (hoverPostPone && $(this).hasClass(cardSelected)) {
        $(this).addClass(cardSelectedHover);
      }
    });

    $(this).mouseleave(function () {
      $(this).removeClass(cardSelectedHover);
      hoverPostPone = true;
    });

  });
});
