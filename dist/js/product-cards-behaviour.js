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

  //------- counter for cards -------//
  function MakeCounter() {
    var currentCount = 0;

    return {
      next : function () {
        return currentCount++;
      },
      reset : function () {
        currentCount = 0;
      },
      setValue : function (value) {
        currentCount = value;
      },
      current : function () {
        return currentCount;
      }
    };
  }

  var counterClick = new MakeCounter();
  var counterHover =  new MakeCounter();

  //---------------------------------//

  card.hover(function () {
    $(this).toggleClass(cardHover);
  });

  card.click(function () {

    $(this).toggleClass(cardSelected);
    counterClick.next();
    if (counterClick.current() % 2 === 0 ) {
      $(this).removeClass(cardSelectedHover);
      counterHover.reset();
    }

    console.log("clicked: " + counterClick.current() + "; hovered: " +  counterHover.current());

    $(this).mouseenter(function () {

      if (counterHover.current() !== 0 && $(this).hasClass(cardSelected)) {
        $(this).addClass(cardSelectedHover);
      }
    });

    $(this).mouseleave(function () {
      $(this).removeClass(cardSelectedHover);
      counterHover.next();
    });

  });
});
