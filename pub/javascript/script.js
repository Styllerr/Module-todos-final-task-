// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import ViewCreate from './scriptViewCreate';
// import ModelAddTask from './scriptModelAddTask';
// import Controller from './scriptController';
// import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', function () {
    const view1 = new ViewCreate();
    const model1 = new ModelAddTask();
    const app = new Controller(view1, model1);
    app.appInit();
})