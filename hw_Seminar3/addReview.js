document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var productName = document.getElementById('productName').value;
  var reviewText = document.getElementById('reviewText').value;

  if (productName.trim() === '' || reviewText.trim() === '') {
    document.getElementById('error').textContent = 'Оба поля должны быть заполнены';
  } else {
    // Сохранение отзыва в localstorage
    var review = {productName: productName, reviewText: reviewText};
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    document.getElementById('error').textContent = '';
    alert('Отзыв успешно добавлен!');
    // Очистка формы
    document.getElementById('productName').value = '';
    document.getElementById('reviewText').value = '';
  }
});
