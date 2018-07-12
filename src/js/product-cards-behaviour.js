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
  function makeCounter() {
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

  var counterClick = makeCounter(); //
  var counterMouseLeave =  makeCounter(); //this will count mouseLeave events and is necessary for postponing hover+select effect

  //---------------------------------//

  card.hover(function () {
    $(this).toggleClass(cardHover);
  });

  card.click(function () {

    $(this).toggleClass(cardSelected);
    counterClick.setValue(2); // when card is selected for the first time, counterClick accept value multiple to 2


    console.log("mouseLeave: " +  counterMouseLeave.current() + "; selectClick: " +  counterClick.current());

    //next click on card will nullify counterClick and counterMouseLeave values by reset() method
    // That is the way to make cards behaviour(on select and select+hover) independent from each other
    if (counterClick.current() % 2 === 0 ) {
      $(this).removeClass(cardSelectedHover);
      counterMouseLeave.reset();
      counterClick.reset();
    }


    $(this).mouseenter(function () {

      //for the first time, when card is selected+hover, there is a checking
      //That's way becoming possible to delay hover effect on 2nd time
      //Further, after mouseleave event, counterMouseLeave gets value more than 0
      //and select+hover begins to work
      if (counterMouseLeave.current() !== 0 && $(this).hasClass(cardSelected)) {
        $(this).addClass(cardSelectedHover);
        $(this).removeClass(cardHover);
      }
    });

    $(this).mouseleave(function () {
      $(this).removeClass(cardSelectedHover);
      $(this).removeClass(cardHover);
      counterMouseLeave.next();
      console.log("mouseLeave: " +  counterMouseLeave.current());
    });

  });
});
