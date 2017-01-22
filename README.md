# Drone Cafe

Дипломный проект курса "Node, Angular и MongoDB: разработка полноценных веб-приложений" "Нетологии".

## Запуск приложения

```
npm install
bower install
node server.js
```

Затем открыть [http://localhost:1337/](http://localhost:1337/)

## Структура проекта

```
app/                           --> структурные файлы приложения
  model.js                     --> модели для работы с БД
config/                        --> конфигурационные файлы приложения
  db.js                        --> конфигурационный файл для подключения к БД
node_modules/                  --> пакеты, установленные через npm
public/                        --> клиент на AngularJS
  assets/                      --> папка со статическими файлами
    bower_components/          --> пакеты, установленные через bower
    css/                       --> файлы стилей
    img/                       --> файлы картинок
    js/                        --> файлы скриптов
  src/                         --> папка angular-приложения
    CookDashboard/             --> компонент для интерфейса повара
      CookDashboard.html       --> файл представления
      CookDashboardCtrl.js     --> файл контроллера
      CookDashboardService.js  --> файл сервиса
    UserDashboard/             --> компонент для интерфейса клиента
      UserDashboard.html       --> файл представления
      UserDashboardCtrl.js     --> файл контроллера
      UserDashboardService.js  --> файл сервиса
    DroneCafeApp.js            --> главный angular-модуль
  index.html                   --> главная страница приложения
.bowerrc                       --> файл настроек для bower
.gitignore                     --> файл настроек для git
bower.json                     --> файл конфигурации для bower
package.json                   --> файл конфигурации для npm
README.md                      --> файл с описанием проекта
server.js                      --> сервер на Node.js / Express.js / mongoose
```