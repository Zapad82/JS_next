// Функция для отображения отзывов по конкретному продукту
function showReviews(productName) {
  var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  var productReviews = reviews.filter(function(review) {
    return review.productName === productName;
  });

  var reviewList = document.getElementById('reviewList');
  reviewList.innerHTML = '';

  if (productReviews.length > 0) {
    productReviews.forEach(function(review) {
      var listItem = document.createElement('li');
      listItem.textContent = review.reviewText;

      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить';
      deleteButton.addEventListener('click', function() {
        // Удаление отзыва из localstorage
        var index = reviews.indexOf(review);
        reviews.splice(index, 1);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Удаление отзыва со страницы
        listItem.remove();

        // Если удалены все отзывы продукта, удаляем продукт
        if (productReviews.length === 1) {
          var productIndex = reviews.findIndex(function(item) {
            return item.productName === productName;
          });
          reviews.splice(productIndex, 1);
          localStorage.setItem('reviews', JSON.stringify(reviews));
          document.getElementById(productName).remove();
        }
      });

      listItem.appendChild(deleteButton);
      reviewList.appendChild(listItem);
    });
  } else {
    reviewList.textContent = 'Нет отзывов';
  }
}

// Функция для показа/скрытия отзывов по конкретному продукту
function toggleReviews(productName) {
  var button = document.getElementById(productName + 'Button');
  if (button.textContent === 'Показать отзывы') {
    showReviews(productName);
    button.textContent = 'Скрыть отзывы';
  } else {
    document.getElementById('reviewList').innerHTML = '';
    button.textContent = 'Показать отзывы';
  }
}
