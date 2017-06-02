# Drone Cafe

Дипломный проект курса "Node, Angular и MongoDB: разработка полноценных веб-приложений" "Нетологии".<br />Задание: [https://bitbucket.org/netology-university/drone-cafe](https://bitbucket.org/netology-university/drone-cafe).<br />Онлайн-версия: [https://adaptedbee-drone-cafe.herokuapp.com/](https://adaptedbee-drone-cafe.herokuapp.com/)

Сервер: Node.js, Express 4, MongoDB 3.2, Mongoose, Socket.io, Chai/Mocha/Supertest.<br />Клиент: HTML5, CSS3, Materialize, AngularJS 1.6, Protractor/Jasmine.

## Запуск приложения

```
npm install
bower install
node server.js
```

Затем открыть [http://localhost:1337/](http://localhost:1337/)

## Структура проекта

```
app/                             --> структурные файлы приложения
  model.js                       --> модели для работы с БД
config/                          --> конфигурационные файлы приложения
  db.js                          --> конфигурационный файл для подключения к БД
node_modules/                    --> пакеты, установленные через npm
public/                          --> клиент на AngularJS
  assets/                        --> папка со статическими файлами
    bower_components/            --> пакеты, установленные через bower
    css/                         --> файлы стилей
    img/                         --> файлы картинок
  src/                           --> папка angular-приложения
    CookDashboard/               --> компонент для интерфейса повара
      CookDashboard.html         --> файл представления
      CookDashboardCtrl.js       --> файл контроллера
      CookDashboardService.js    --> файл сервиса
    UserDashboard/               --> компонент для интерфейса клиента
      UserDashboard.html         --> файл представления
      UserDashboardCtrl.js       --> файл контроллера
      UserDashboardService.js    --> файл сервиса
    DroneCafeApp.js              --> главный angular-модуль
  index.html                     --> главная страница приложения
test/                            --> папка с тестами
  page-objects/                  --> Page Objects для клиентских тестов (protractor / jasmine)
  dronecafeapp-cookpage-spec.js  --> клиентские тесты (страница повара)
  dronecafeapp-userpage-spec.js  --> клиентские тесты (страница пользователя)
  server-api.test.js             --> серверные тесты (mocha / chai / supertest)
.bowerrc                         --> файл настроек для bower
.gitignore                       --> файл настроек для git
bower.json                       --> файл конфигурации для bower
conf.js                          --> файл конфигурации для protractor
package.json                     --> файл конфигурации для npm
README.md                        --> файл с описанием проекта
server.js                        --> сервер на Node.js / Express.js / mongoose
```