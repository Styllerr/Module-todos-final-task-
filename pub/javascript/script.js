import ViewCreate from './scriptViewCreate';
import ModelAddTask from './scriptModelAddTask';
import Controller from './scriptController';
import '../css/main.css';

document.addEventListener('DOMContentLoaded', function () {
    const view1 = new ViewCreate();
    const model1 = new ModelAddTask();
    const app = new Controller(view1, model1);
    app.appInit();
})