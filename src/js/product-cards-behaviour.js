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

  var clickPermission = false;
  var hoverPermission = false;

  card.hover(function () {
    $(this).toggleClass(cardHover);
  });

  card.click(function () {

    $(this).toggleClass(cardSelected);
    clickPermission = true;

    //next click on card will nullify counterClick and counterMouseLeave values by reset() method
    // That is the way to make cards behaviour(on select and select+hover) independent from each other
    if (clickPermission) {
      $(this).removeClass(cardSelectedHover);
      clickPermission = false;
      hoverPermission = false;
    }


    $(this).mouseenter(function () {

      //for the first time, when card is selected+hover, there is a checking
      //That's way becoming possible to delay hover effect on 2nd time
      //Further, after mouseleave event, counterMouseLeave gets value more than 0
      //and select+hover begins to work
      if (hoverPermission && $(this).hasClass(cardSelected)) {
        $(this).addClass(cardSelectedHover);
      }
    });

    $(this).mouseleave(function () {
      $(this).removeClass(cardSelectedHover);
      hoverPermission = true;
    });

  });
});
