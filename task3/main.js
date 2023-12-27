/* Задание 3: 
Создать интерактивную веб-страницу, которая позволяет пользователям 
регистрироваться и входить в систему, используя данные, сохраненные данные 
в LocalStorage.
 
Приложение будет состоять из трёх основных страниц:
 
1.Страница регистрации: 
  a. Предлагает пользователю ввести логин и пароль.
  b. После ввода данных, они сохраняются в LocalStorage.
  c. Пользователь перенаправляется на страницу входа.
2. Страница входа:
  a. Предлагает пользователю ввести логин и пароль.
  b. Если введенные данные совпадают с данными из LocalStorage, пользователь 
    перенаправляется на страницу приветствия.
  c.Если данные не совпадают, выводится сообщение об ошибке.
3. Страница приветствия:
  a. Простое приветственное сообщение для авторизованного пользователя.
  b. Кнопка "Выйти", при нажатии на которую пользователь возвращается на 
    страницу входа. 
    */

    const loginEl = document.getElementById("login");
    const passwordEl = document.getElementById("password");
    const btnLoginEl = document.getElementById("btn");
    
    btnLoginEl.addEventListener("click", saveDataProfile);
    
    function saveDataProfile() {
      const login = loginEl.value;
      const password = passwordEl.value;
      saveProfile(login, password);
      window.open('profile.html', '_self');
    }