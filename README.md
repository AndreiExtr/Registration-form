# Форма регистрации и авторизации

localStorage — это встроенный объект в веб-браузерах, который позволяет хранить данные в формате ключ-значение непосредственно в браузере. Эти данные сохраняются даже после закрытия и перезапуска браузера, в отличие от sessionStorage, который хранит данные только в течение текущей сессии.

Основные характеристики localStorage:
1. Объем хранилища: Обычно предоставляет до 5 МБ на домен.
2. Срок хранения: Данные остаются доступными даже после закрытия браузера и перезагрузки устройства.
3. Доступность: Доступен из всех вкладок и окон, открытых на одном и том же домене.

```
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
  ```