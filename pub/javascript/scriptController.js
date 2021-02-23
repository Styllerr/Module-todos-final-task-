class Controller {
    constructor(view1, model1) {
        this.view = view1;
        this.model = model1;
        this.view.bindSelectService(this.handlSelectService);
        this.view.bindSelectTask(this.handlSelectTask);
        this.view.bindCreateNewTask();
        this.view.bindRegestrationButton(this.handlRegistration);
        this.view.bindAddTask(this.handlAddTask, this.handlPutTask);
        this.view.bindSelectLocation(this.handlSelectLocation);
        this.view.bindAddDescription(this.handlAddDescription);
        this.view.bindEditDeleteTask(this.handlEditTask, this.handlDeleteTask);
    }
    handlSelectService = (service) => {
        this.view.selectService(service);
    }
    handlSelectTask = () => {
        this.view.selectTask();
    }
    handlRegistration = () => {
        this.view.renderModal()
    }
    handlAddTask = async (data) => {
        await this.model.addTasktoDB(data);
        this.createTasksList();
        this.view.renderCreateNewTaskBlock();
    }
    handlPutTask = async (id, data) => {
        await this.model.putTasktoDB(id, data);
        this.appInit();
    }

    handlSelectLocation = (loc) => {
        this.view.selectLocation(loc);
    }
    handlAddDescription = (desc) => {
        this.view.addDescription(desc);
    }
    createTasksList() {
        this.model.updatedTaskList()
            .then(data => this.view.renderTasksList(data));
    }
    handlEditTask = (id) => {
        this.model.getTaskForEdit(id)
            .then(data => this.view.renderEditTaskBlock(data));
    }
    handlDeleteTask = async () => {
        await this.model.deleteTask(this.view.getId);
        this.createTasksList();
    }
    appInit() {
        this.view.renderPage();
        this.view.renderCreateNewTaskBlock();
        this.createTasksList();
    }
}
