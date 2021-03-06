# WG Forge. Front-End Course 2021

## Команда № 1. Дипломный проект

### Разработка магазина внутриигровых товаров

Используемый стек технологий: JS, TypeScript, Express, MongoDB, SCSS, WebPack, EsLint, Prettier, StyleLint, Husky

Деплой предрелизной версии проекта [https://wg-front-end.herokuapp.com](https://wg-front-end.herokuapp.com)

Кроме функционала ТЗ дипломного проекта (часть 1) **дополнительно** реализовано:

1. Разработан backend с документацией swagger [https://wg-forge-back.herokuapp.com/api-docs](https://wg-forge-back.herokuapp.com/api-docs) для необходимого функционала
1. Реализована страница админа с детализированным UI по работе с товарами и настройками магазина, проработана валидация ввода
1. Реализованы страницы signin/signup с необходимой валидацией пользовательского ввода. Пользователи, не имеющие статуса admin, не смогут попасть на страницу admin
1. При прохождении процедуры логина после перезагрузки страницы, например, состояние и данные пользователя автоматически подгружаются. Переход на страницы signin/signup блокируется до момента logout
1. Реализована страница корзины товаров с возможностью подтверждения заказа
1. Работа с избранным и корзиной доступна только авторизованным пользователям. Иначе, при попытке - реализован редирект пользователя на страницу signin
1. Кнопки добавления в избранное и корзину (purchase) связаны между собой на всех страницах (товара, главной витрине магазина, в избранном, в корзине) и отображаются в соответствии с состоянием на бекэнде
1. Добавлены спиннер загрузки и popup для отображения пользовательских сообщений, в т.ч. об ошибках
1. На главной странице реализована анимация добавления товара в корзину
1. Красивый и единый дизайн, в т.ч. проработанный адаптив, включая свайпер в мобильной версии страницы товара. Добавлен footer.
1. В проекте стиллистически проработаны интерактивные элементы (плавные анимации, ховеры, смена визуальных состояний)
1. Реализована страница 404
1. В окружении настроен webpack, необходимые линтеры и форматеры кода, precommit хуки (husky). Настроен автоматический деплой собранного проекта из последнего PR или состояния ветки master [https://wg-front-end.herokuapp.com](https://wg-front-end.herokuapp.com).
1. Использован TypeScript

### Краткая инструкция по установке и использованию проекта

#### **Установка:**

```sh
1. Установить (если не имеется) node.js с npm (node package manager)
```

```sh
2. Склонировать или скачать данный репозиторий
```

```sh
3. Перейти в папку проекта и запустить npm install в командной строке (в терминале, например)
```

После успешной установки зависимостей

#### **Использование:**

В командной строке запуск `npm run` и

```sh
serve - старт проекта в режиме разработки и горячей отладки (в dev-server);
start - аналогично (короткий вызов npm start);
build - сборка проекта в production-режиме;
build:dev - сборка проекта в dev-режиме;
lint - запуск проверки EsLint;
lint:fix - запуск проверки EsLint с автоматическим исправлением ошибок по возможности;
prettier - запуск prettier для форматирования кода;
stylelint - запуск stylelint для проверки стилей;
stylelint:fix - запуск stylelint для проверки стилей с автоматическим исправлением ошибок по возможности;
precommit - последовательный запуск EsLint, prettier, stylelint с автоматическим исправлением ошибок по возможности. Предназначен для запуска перед каждым коммитом в репозиторий;
```

Собранный проект для деплоя (после команд `npm run build` и `npm run build:dev`) располагается в папке `/dist`
