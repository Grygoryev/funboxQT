var columns = document.getElementsByClassName('product-card__container');

function makeEqualHeight(columns) {
  var tallestColumn = 0;

  for (var i = 0; i < columns.length; i++) {
    if (columns[i].offsetHeight > tallestColumn) {
      tallestColumn = columns[i].offsetHeight;
    }
  }

  for (i = 0; columns.length; i++) {
    columns[i].style.minHeight = tallestColumn + 'px';
  }
}

makeEqualHeight(columns);
