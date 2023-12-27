    // Показываем список продуктов с кнопками "показать отзывы"
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    var products = [...new Set(reviews.map(review => review.productName))];
    var productsList = document.getElementById('productsList');
    products.forEach(function(product) {
      var listItem = document.createElement('li');
      listItem.textContent = product;
      var button = document.createElement('button');
      button.textContent = 'Показать отзывы';
      button.id = product + 'Button';
      button.addEventListener('click', function() {
        toggleReviews(product);
      });
      listItem.appendChild(button);
      productsList.appendChild(listItem);
    });