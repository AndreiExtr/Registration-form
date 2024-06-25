//ФОРМА РЕГИСТРАЦИИ
document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('title'); //ЗАГОЛОВОК
  const loginButton = document.getElementById('loginButton'); // КНОПКА "ВХОД"
  const registrButton = document.getElementById('registrButton');// КНОПКА "ЗАРЕГИСТРИРОВАТЬСЯ"
  const authButton = document.getElementById('authButton');// КНОПКА "АВТОРИЗОВАТЬСЯ"
  const checkboxLabel = document.getElementById('checkboxLabel');// ТЕКСТ РЯДОМ С ЧЕКБОКСОМ
  const registrationButton = document.getElementById('registration');// КНОПКА "РЕГИСТРАЦИЯ"

  //ПЕРЕХОД ПО КНОПКЕ "ЗАРЕГИСТРИРОВАТЬСЯ" ИЗ ФОРМЫ АВТОРИЗАЦИИ
  registrButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (title.textContent === 'Вход') {
        title.textContent = 'Регистрация';
        registrationButton.style.display = 'block';
        loginButton.style.display = 'none';
        registrButton.style.display = 'none';
        authButton.style.display = 'block';
        checkboxLabel.innerHTML = 'Я согласен получать обновления на почту';
    }
  });

  //ПЕРЕХОД ПО КНОПКЕ "АВТОРИЗОВАТЬСЯ" ИЗ ФОРМЫ РЕГИСТРАЦИИ
  authButton.addEventListener('click', function(event) {
      event.preventDefault();

      title.textContent = 'Вход';
      loginButton.style.display = 'block';
      registrationButton.style.display = 'none';
      registrButton.style.display = 'block';
      authButton.style.display = 'none';
      checkboxLabel.innerHTML = 'Я согласен с <a href="#">Правилами пользования приложением</a>';
  });

  //ФОРМА РЕГИСТРАЦИИ
  registrationButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Данные из основных полей
    let emailInput = document.getElementById('email').value.trim();
    let passwordInput = document.getElementById('password').value.trim();
    let checkboxInput = document.getElementById('agreement').checked;

    let emailInputError = document.getElementById('emailError').value.trim();
    let passwordInputError = document.getElementById('passwordError').value.trim();
    let checkboxInputError = document.getElementById('agreementError').checked;

    // Переменная для проверки наличия ошибок
    let isError = false;

    // Проверка поля email
    if (emailInput === '') {
      document.querySelector('.container_form-inputEmailError').style.display = 'flex';
      document.querySelector('.container_form-inputEmailError .error').style.display = 'flex';
      document.querySelector('.container_form-inputEmailError .errorValid').style.display = 'none';
      document.querySelector('.container_form-inputEmailError').style.gap = '4px';
      isError = true;
      document.querySelector('.container_form-inputEmail').style.display = 'none';
    } else if (!emailInput.includes('@') || !emailInput.includes('.ru')) { //ПРОВЕРКА НА ДОМЕН .ru И @
        document.querySelector('.container_form-inputEmailError').style.display = 'flex';
        document.querySelector('.container_form-inputEmailError .errorValid').style.display = 'flex';
        document.querySelector('.container_form-inputEmailError .error').style.display = 'none';
        document.querySelector('.container_form-inputEmailError').style.gap = '4px';
        isError = true;
        document.querySelector('.container_form-inputEmail').style.display = 'none';
    } else {
        document.querySelector('.container_form-inputEmailError').style.display = 'none';
        document.querySelector('.container_form-inputEmail').style.display = 'flex';
    }

    // Проверка чекбокса
    if (!checkboxInput) {
      document.querySelector('.container_form-inputСheckboxError').style.display = 'flex';
      document.querySelector('.container_form-inputСheckboxError').style.gap = '4px';
      isError = true;
      document.querySelector('.container_form-inputСheckbox').style.display = 'none';
    } else {
      document.querySelector('.container_form-inputСheckboxError').style.display = 'none';
      document.querySelector('.container_form-inputСheckbox').style.display = 'flex'; 
    }

    // Проверка поля password
    if (passwordInput === '') {
      document.querySelector('.container_form-inputPasswordError').style.display = 'flex';
      document.querySelector('.container_form-inputPasswordError .error').style.display = 'flex';
      document.querySelector('.container_form-inputPasswordError .errorCount').style.display = 'none';
      document.querySelector('.container_form-inputPasswordError').style.gap = '4px';
      isError = true;
      document.querySelector('.container_form-inputPassword').style.display = 'none';
  } else if (passwordInput.length < 8) {
      document.querySelector('.container_form-inputPasswordError').style.display = 'flex';
      document.querySelector('.container_form-inputPasswordError .error').style.display = 'none';
      document.querySelector('.container_form-inputPasswordError .errorCount').style.display = 'flex';
      document.querySelector('.container_form-inputPasswordError').style.gap = '4px';
      isError = true;
      document.querySelector('.container_form-inputPassword').style.display = 'none';
  } else {
      document.querySelector('.container_form-inputPasswordError').style.display = 'none';
      document.querySelector('.container_form-inputPassword').style.display = 'flex';
  }

    // Сохранение данных и переход на новую страницу
    if (!isError && emailInput !== '' && passwordInput !== '' && checkboxInput) {

      // Получаем существующие данные из localStorage
      let users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Добавляем нового пользователя в массив
      users.push({ email: emailInput, password: passwordInput });

      // Сохраняем обновленный массив в localStorage
      localStorage.setItem('users', JSON.stringify(users));
      
      // Переход на новую страницу
      window.location.href = 'page.html';

    } else if (isError) {
      if ((emailInputError !== '' && passwordInputError !== '' && checkboxInputError) ||
        (emailInput !== '' && passwordInputError !== '' && checkboxInputError) || 
        (emailInputError !== '' && passwordInput !== '' && checkboxInputError) || 
        (emailInputError !== '' && passwordInputError !== '' && checkboxInput) ||
        (emailInput !== '' && passwordInputError !== '' && checkboxInput)) {

        // Получаем существующие данные из localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Добавляется новый пользователь с ошибками в массив
        users.push({ email: emailInputError, password: passwordInputError });
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'page.html';
      }
    }
  });
});

// ФОРМА АВТОРИЗАЦИИ
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.container_form-login').addEventListener('click', function(event) {
    event.preventDefault(); 

    // Данные из основных полей
    let emailInput = document.getElementById('email').value.trim();
    let passwordInput = document.getElementById('password').value.trim();
    let checkboxInput = document.getElementById('agreement').checked;

    // Данные из полей с ошибками
    let emailInputError = document.getElementById('emailError').value.trim();
    let passwordInputError = document.getElementById('passwordError').value.trim();
    let checkboxInputError = document.getElementById('agreementError').checked;

    let isError = false;

    // Проверка поля email
    if (emailInput === '') {
      document.querySelector('.container_form-inputEmailError').style.display = 'flex';
      document.querySelector('.container_form-inputEmailError .error').style.display = 'flex';
      document.querySelector('.container_form-inputEmailError').style.gap = '4px';
      isError = true;
      document.querySelector('.container_form-inputEmail').style.display = 'none';
    } else {
      document.querySelector('.container_form-inputEmailError').style.display = 'none';
      document.querySelector('.container_form-inputEmail').style.display = 'flex';
    }

    // Проверка поля password
    if (passwordInput === '') {
      document.querySelector('.container_form-inputPasswordError').style.display = 'flex';
      document.querySelector('.container_form-inputPasswordError').style.gap = '4px';
      isError = true;
      document.querySelector('.container_form-inputPassword').style.display = 'none';
    } else {
      document.querySelector('.container_form-inputPasswordError').style.display = 'none';
      document.querySelector('.container_form-inputPassword').style.display = 'flex';
    }

    // Проверка чекбокса
    if (!checkboxInput) {
      document.querySelector('.container_form-inputСheckboxError').style.display = 'flex';
      document.querySelector('.container_form-inputСheckboxError').style.gap = '4px';
      isError = true;
      document.querySelector('.container_form-inputСheckbox').style.display = 'none';
    } else {
      document.querySelector('.container_form-inputСheckboxError').style.display = 'none';
      document.querySelector('.container_form-inputСheckbox').style.display = 'flex'; 
    }

    // Проверка условий для авторизации
    if (!isError) {
      // Получение данных из localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Проверка существования пользователя
      const user = users.find(user => 
        (user.email === emailInput && user.password === passwordInput) ||
        (user.email === emailInputError && user.password === passwordInputError)
      );

      if (user) {
        // Пользователь найден, переходим на страницу
        window.location.href = 'page.html';
      } else {
        document.querySelector('.errorLogin').style.display = 'block';
      }
    } else if (isError){

      if ((emailInputError !== '' && passwordInputError !== '' && checkboxInputError) ||
        (emailInput !== '' && passwordInputError !== '' && checkboxInputError) ||
        (emailInput !== '' && passwordInput !== '' && checkboxInputError) || 
        (emailInputError !== '' && passwordInput !== '' && checkboxInputError) || 
        (emailInputError !== '' && passwordInputError !== '' && checkboxInput) ||
        (emailInputError !== '' && passwordInput !== '' && checkboxInput)) {
          
          const users = JSON.parse(localStorage.getItem('users')) || [];

          // Проверка существования пользователя
          const user = users.find(user => 
            (user.email === emailInputError && user.password === passwordInputError) ||
            (user.email === emailInput && user.password === passwordInputError) || 
            (user.email === emailInputError && user.password === passwordInput) 
          );
    
          if (user) {
            // Пользователь найден, переходим на страницу
            window.location.href = 'page.html';
          } else {
            document.querySelector('.errorLogin').style.display = 'block';
          }
        
      }
    }
  });
});

