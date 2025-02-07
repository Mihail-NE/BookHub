# BookHub

BookHub — это веб-приложение для поиска, просмотра и покупки книг. Пользователи могут просматривать каталог книг, добавлять их в корзину или избранное, а также управлять своим профилем. Приложение использует Google Books API для получения данных о книгах и Firebase для аутентификации и хранения данных пользователей.

## Основные функции

-   Каталог книг: Просмотр книг с фильтрацией по названию, автору, категории и издателю
-   Корзина: Добавление книг в корзину, изменение количества и удаление
-   Избранное: Сохранение книг в избранное для быстрого доступа
-   Аутентификация: Регистрация и вход через email/password или Google
-   Профиль пользователя: Просмотр и редактирование профиля, включая фото
-   Адаптивный дизайн: Поддержка мобильных устройств, планшетов и десктопов

## Технологии

-   Frontend: React, React Router, Tailwind CSS, Framer Motion
-   State Management: React Context API, useReducer
-   API: Google Books API
-   Аутентификация и база данных: Firebase (Authentication, Firestore)
-   Инструменты: Vite, ESLint, Prettier

## Установка и запуск

### 1. Клонирование репозитория

```bash
git clone https://github.com/ваш-username/bookhub.git
cd bookhub
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Настройка Firebase

1. Создайте проект в Firebase Console
2. Добавьте веб-приложение в ваш проект Firebase
3. Скопируйте конфигурацию Firebase и создайте файл .env в корне проекта:

```env
VITE_FIREBASE_API_KEY=ваш-api-key
VITE_FIREBASE_AUTH_DOMAIN=ваш-auth-domain
VITE_FIREBASE_PROJECT_ID=ваш-project-id
VITE_FIREBASE_STORAGE_BUCKET=ваш-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=ваш-messaging-sender-id
VITE_FIREBASE_APP_ID=ваш-app-id
```

### 4. Настройка Google Books API

1. Получите API ключ от Google Cloud Console
2. Добавьте его в файл .env:

```env
VITE_API_KEY=ваш-google-books-api-key
```

### 5. Запуск проекта

```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:5173
