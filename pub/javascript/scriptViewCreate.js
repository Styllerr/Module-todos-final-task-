class ViewCreate {
    constructor() {
        this.wrapper = document.querySelector('div.wrapper');
        this.header = document.createElement('header');
        this.header.className = 'header';
        this.header.innerHTML = `<ul class="header_menu">
        <li class="active"><a href="#">JobUp</a></li>
        <li><a href="#">DASHBOARD</a></li>
        <li><a href="#">HISTORY</a></li></ul>`;
        this.wrappForButton = document.createElement('div');
        this.wrappForButton.className = 'wrappForButton';
        this.loginButton = document.createElement('button');
        this.loginButton.innerText = 'Log In'
        this.registrButton = document.createElement('button');
        this.registrButton.innerText = "Sign Up"

        this.modalRegistration = document.createElement('div');
        this.modalRegistration.className = 'wrapperModal';
        this.modalCard = document.createElement('div');
        this.modalCard.className = 'modalCard';
        this.modalCard.innerHTML = `
        <form class="modalCard_regForm" method=POST>
        <label for="candidatName">Name</label>
        <input class="candidatName" type="text">
        <input class="candidatSubmit" type="submit"  name="Submit" value="Submit">
        <input class="candidatReset" type="reset"  name="Cancel" value="Cancel">
        </form>`;
        this.main = document.createElement('main');
        this.taskBlock = document.createElement('div');
        this.taskBlock.className = 'taskBlock';
        this.newTaskButton = document.createElement('div');
        this.newTaskButton.className = 'newTaskButton';
        this.newTaskButton.innerText = '+ NEW TASK';
        this.wrapperTaskCard = document.createElement('div');
        this.form = document.createElement('form');
        this.form.name = 'todo';
        this.wrapperNewTaskText = document.createElement('div');
        this.wrapperNewTaskText.className = 'wrapper-newTaskText';
        this.wrapperNewTaskText.innerHTML = `<div class="caption">NEW TASK</div>
        <span>I need <span class="serviceTypeText"></span> <span class="taskText">
        </span>, <span class="descriptionText"></span>.</span><p class="locationText"></p>`;
        this.newTaskLocation = document.createElement('p');
        this.newTaskLocation.className = 'newTask__location';
        this.newTaskLocation.innerText = '';
        this.addTaskButton = document.createElement('input');
        this.addTaskButton.type = 'button';
        this.addTaskButton.className = 'newTask__button';
        this.wrapperLocation = document.createElement('div');
        this.wrapperLocation.className = 'wrapper-location';
        this.wrapperLocation.innerHTML = '<div class="caption">LOCATION</div>';
        this.location = document.createElement('input');
        this.location.type = 'text';
        this.location.name = 'location';
        this.location.className = 'field location';
        this.location.placeholder = '1, First str. Dnipro, 49000';
        this.wrapperServiceType = document.createElement('div');
        this.wrapperServiceType.className = 'wrapper-serviceType';
        this.wrapperServiceType.innerHTML = `<div class="caption">SERVICE TYPE</div>
                <div class="serviceType">
                    <label class="elec" for="electician"></label>
                    <p>Electician</p>
                </div>
                <div class="serviceType">
                    <label class="plum" for="plumber"></label>
                    <p>Plumber</p>
                </div>
                <div class="serviceType">
                    <label class="gard" for="gardener"></label>
                    <p>Gardener</p>
                </div>
                <div class="serviceType">
                    <label class="hous" for="housekeeper"></label>
                    <p>Housekeeper</p>
                </div>
                <div class="serviceType">
                    <label class="cook" for="cook"></label>
                    <p>Cook</p>
                </div>`;

        this.electician = document.createElement('input');
        this.electician.type = 'radio';
        this.electician.name = 'serviceType';
        this.electician.value = 'electician';
        this.electician.id = 'electician';

        this.plumber = document.createElement('input');
        this.plumber.type = 'radio';
        this.plumber.name = 'serviceType';
        this.plumber.value = 'plumber';
        this.plumber.id = 'plumber';

        this.gardener = document.createElement('input');
        this.gardener.type = 'radio';
        this.gardener.name = 'serviceType';
        this.gardener.value = 'gardener';
        this.gardener.id = 'gardener';

        this.housekeeper = document.createElement('input');
        this.housekeeper.type = 'radio';
        this.housekeeper.name = 'serviceType';
        this.housekeeper.value = 'housekeeper';
        this.housekeeper.id = 'housekeeper';

        this.cook = document.createElement('input');
        this.cook.type = 'radio';
        this.cook.name = 'serviceType';
        this.cook.value = 'cook';
        this.cook.id = 'cook';

        this.wrapperForTask = document.createElement('div');
        this.wrapperForTask.className = 'wrapper-task';

        this.wrapperElecticianTask = document.createElement('div');
        this.wrapperElecticianTask.className = 'wrapper-electicianTask';
        this.wrapperElecticianTask.innerHTML = `<div class="caption">ELECTICIAN TASKS</div>
        <div class="task">
            <label class="taskName lamp" for="lamp">Lamp replacement</label>
        </div>
        <div class="task">
            <label class="taskName outlet" for="outlet">Outlet Repair</label>
        </div>
        <div class="task">
            <label class="taskName wiring" for="wiring">Wiring repair</label>
        </div>
        <div class="task">
            <label class="taskName fuse" for="fuse">Fuse replacement</label>
        </div>
        <div class="task">
            <label class="taskName trouble" for="trouble">Troubleshooting</label>
        </div>`;
        this.lamp = document.createElement('input');
        this.lamp.type = 'radio';
        this.lamp.name = 'taskName';
        this.lamp.value = 'lamp replacement';
        this.lamp.id = 'lamp';

        this.outlet = document.createElement('input');
        this.outlet.type = 'radio';
        this.outlet.name = 'taskName';
        this.outlet.value = 'outlet repair';
        this.outlet.id = 'outlet';

        this.wiring = document.createElement('input');
        this.wiring.type = 'radio';
        this.wiring.name = 'taskName';
        this.wiring.value = 'wiring repair';
        this.wiring.id = 'wiring';

        this.fuse = document.createElement('input');
        this.fuse.type = 'radio';
        this.fuse.name = 'taskName';
        this.fuse.value = 'fuse replacement';
        this.fuse.id = 'fuse';

        this.trouble = document.createElement('input');
        this.trouble.type = 'radio';
        this.trouble.name = 'taskName';
        this.trouble.value = 'troubleshooting';
        this.trouble.id = 'trouble';

        this.wrapperPlumberTask = document.createElement('div');
        this.wrapperPlumberTask.className = 'wrapper-plumberTask';
        this.wrapperPlumberTask.innerHTML = `<div class="caption">PLUMBER TASKS</div>
        <div class="task">
            <label class="taskName toilet" for="toilet">Unblock a toilet</label>
        </div>
        <div class="task">
            <label class="taskName sink" for="sink">Unblock a sink</label>
        </div>
        <div class="task">
            <label class="taskName leak" for="leak">Fix a water leak</label>
        </div>
        <div class="task">
            <label class="taskName installSink" for="installSink">Install a sink</label>
        </div>
        <div class="task">
            <label class="taskName shower" for="shower">Install a shower</label>
        </div>
        <div class="task">
            <label class="taskName installToilet" for="installToilet">Install a toilet</label>
        </div>`;
        this.toilet = document.createElement('input');
        this.toilet.type = 'radio';
        this.toilet.name = 'taskName';
        this.toilet.value = 'unblock a toilet';
        this.toilet.id = 'toilet';

        this.sink = document.createElement('input');
        this.sink.type = 'radio';
        this.sink.name = 'taskName';
        this.sink.value = 'unblock a sink';
        this.sink.id = 'sink';

        this.leak = document.createElement('input');
        this.leak.type = 'radio';
        this.leak.name = 'taskName';
        this.leak.value = 'fix a water leak';
        this.leak.id = 'leak';

        this.installSink = document.createElement('input');
        this.installSink.type = 'radio';
        this.installSink.name = 'taskName';
        this.installSink.value = 'install a sink';
        this.installSink.id = 'installSink';

        this.shower = document.createElement('input');
        this.shower.type = 'radio';
        this.shower.name = 'taskName';
        this.shower.value = 'install a shower';
        this.shower.id = 'shower';

        this.installToilet = document.createElement('input');
        this.installToilet.type = 'radio';
        this.installToilet.name = 'taskName';
        this.installToilet.value = 'install a toilet';
        this.installToilet.id = 'installToilet';

        this.wrapperGardenerTask = document.createElement('div');
        this.wrapperGardenerTask.className = 'wrapper-gardenerTask';
        this.wrapperGardenerTask.innerHTML = `<div class="caption">GARDENER TASKS</div>
        <div class="task">
            <label class="taskName watering" for="watering">Watering plants</label>
        </div>
        <div class="task">
            <label class="taskName trees" for="trees">Pruning trees</label>
        </div>
        <div class="task">
            <label class="taskName mowing" for="mowing">Lawn mowing</label>
        </div>
        <div class="task">
            <label class="taskName flower" for="flower">Flowerbed</label>
        </div>`;

        this.watering = document.createElement('input');
        this.watering.type = 'radio';
        this.watering.name = 'taskName';
        this.watering.value = 'watering plants';
        this.watering.id = 'watering';

        this.trees = document.createElement('input');
        this.trees.type = 'radio';
        this.trees.name = 'taskName';
        this.trees.value = 'pruning trees';
        this.trees.id = 'trees';

        this.mowing = document.createElement('input');
        this.mowing.type = 'radio';
        this.mowing.name = 'taskName';
        this.mowing.value = 'lawn mowing';
        this.mowing.id = 'mowing';

        this.flower = document.createElement('input');
        this.flower.type = 'radio';
        this.flower.name = 'taskName';
        this.flower.value = 'flowerbed creation';
        this.flower.id = 'flower';

        this.wrapperHousekeeperTask = document.createElement('div');
        this.wrapperHousekeeperTask.className = 'wrapper-housekeeperTask';
        this.wrapperHousekeeperTask.innerHTML = `<div class="caption">HOUSEKEEPER TASKS</div>
        <div class="task">
            <label class="taskName cleaning" for="cleaning">Cleaning</label>
        </div>
        <div class="task">
            <label class="taskName washing" for="washing">Washing</label>
        </div>
        <div class="task">
            <label class="taskName ironing" for="ironing">Ironing</label>
        </div>
        <div class="task">
            <label class="taskName shopping" for="shopping">Grocery shopping</label>
        </div>
        <div class="task">
            <label class="taskName babysitting" for="babysitting">Babysitting</label>
        </div>`;

        this.cleaning = document.createElement('input');
        this.cleaning.type = 'radio';
        this.cleaning.name = 'taskName';
        this.cleaning.value = 'cleaning';
        this.cleaning.id = 'cleaning';

        this.washing = document.createElement('input');
        this.washing.type = 'radio';
        this.washing.name = 'taskName';
        this.washing.value = 'washing';
        this.washing.id = 'washing';

        this.ironing = document.createElement('input');
        this.ironing.type = 'radio';
        this.ironing.name = 'taskName';
        this.mowing.value = 'ironing';
        this.ironing.id = 'ironing';

        this.shopping = document.createElement('input');
        this.shopping.type = 'radio';
        this.shopping.name = 'taskName';
        this.shopping.value = 'grocery shopping';
        this.shopping.id = 'shopping';

        this.babysitting = document.createElement('input');
        this.babysitting.type = 'radio';
        this.babysitting.name = 'taskName';
        this.babysitting.value = 'babysitting';
        this.babysitting.id = 'babysitting';

        this.wrapperCookingTask = document.createElement('div');
        this.wrapperCookingTask.className = 'wrapper-cookingTask';
        this.wrapperCookingTask.innerHTML = `<div class="caption">COOKING TASKS</div>
        <div class="task">
            <label class="taskName lunch" for="lunch">Cooking lunch</label>
        </div>
        <div class="task">
            <label class="taskName dinner" for="dinner">Cooking dinner</label>
        </div>
        <div class="task">
            <label class="taskName banquet" for="banquet">Banquet</label>
        </div>`;

        this.lunch = document.createElement('input');
        this.lunch.type = 'radio';
        this.lunch.name = 'taskName';
        this.lunch.value = 'cooking lunch';
        this.lunch.id = 'lunch';

        this.dinner = document.createElement('input');
        this.dinner.type = 'radio';
        this.dinner.name = 'taskName';
        this.dinner.value = 'cooking dinner';
        this.dinner.id = 'dinner';

        this.banquet = document.createElement('input');
        this.banquet.type = 'radio';
        this.banquet.name = 'taskName';
        this.banquet.value = 'banquet';
        this.banquet.id = 'banquet';

        this.wrapperDescription = document.createElement('div');
        this.wrapperDescription.className = 'wrapper-description';
        this.wrapperDescription.innerHTML = `<div class="caption">TASK DESCRIPTION</div>`;

        this.description = document.createElement('input');
        this.description.type = 'text';
        this.description.name = 'description';
        this.description.placeholder = 'write something...';
        this.description.className = 'field description';

    }
    renderPage() {

        this.wrappForButton.append(this.loginButton, this.registrButton);
        this.header.append(this.wrappForButton);
        this.wrapper.append(this.header, this.main);
        this.main.append(this.taskBlock);
        this.taskBlock.append(this.newTaskButton, this.wrapperTaskCard);
    }
    renderModal() {
        console.log('Modal window for reg is show')
        this.wrapper.prepend(this.modalRegistration, this.modalCard)
    }
    renderCreateNewTaskBlock() {
        this.main.append(this.form);
        this.form.innerHTML = '';
        this.form.className = 'newTaskForm';
        this.newTaskButton.innerText = '+ NEW TASK';
        this.addTaskButton.value = 'CREATE TASK';
        this.wrapperNewTaskText.append(this.addTaskButton);
        this.wrapperLocation.append(this.location);
        this.form.append(this.wrapperNewTaskText, this.wrapperLocation, this.wrapperServiceType);
        this.form.append(this.wrapperForTask, this.wrapperDescription);
        this.wrapperDescription.append(this.description);

        document.querySelector('label.elec').parentNode.prepend(this.electician);
        document.querySelector('label.plum').parentNode.prepend(this.plumber);
        document.querySelector('label.gard').parentNode.prepend(this.gardener);
        document.querySelector('label.hous').parentNode.prepend(this.housekeeper);
        document.querySelector('label.cook').parentNode.prepend(this.cook);

        this.serviceTypeText = document.querySelector('span.serviceTypeText');
        this.taskText = document.querySelector('span.taskText');
        this.locationText = document.querySelector('p.locationText');
        this.descriptionText = document.querySelector('span.descriptionText');
    }
    renderEditTaskBlock(data) {
        this.id = data._id;
        this.form.parentNode.removeChild(this.form);
        this.main.append(this.form);
        this.form.innerHTML = '';
        this.form.className = 'editTaskForm';
        this.wrapperNewTaskText.append(this.addTaskButton);
        this.addTaskButton.value = "EDIT";
        this.wrapperLocation.append(this.location);
        this.location.value = data.location;
        this.form.append(this.wrapperNewTaskText, this.wrapperLocation, this.wrapperServiceType);
        this.form.append(this.wrapperForTask, this.wrapperDescription);
        this.wrapperDescription.append(this.description);
        this.description.value = data.description;

        document.querySelector('label.elec').parentNode.prepend(this.electician);
        document.querySelector('label.plum').parentNode.prepend(this.plumber);
        document.querySelector('label.gard').parentNode.prepend(this.gardener);
        document.querySelector('label.hous').parentNode.prepend(this.housekeeper);
        document.querySelector('label.cook').parentNode.prepend(this.cook);

        this.serviceTypeText = document.querySelector('span.serviceTypeText');
        this.taskText = document.querySelector('span.taskText');
        this.locationText = document.querySelector('p.locationText');
        this.descriptionText = document.querySelector('span.descriptionText');
        let service;
        switch (data.serviceType) {
            case "electician":
                this.electician.checked = true;
                service = 'elec';
                break;
            case "plumber":
                this.plumber.checked = true;
                service = 'plum';
                break;
            case "gardener":
                this.gardener.checked = true;
                service = 'gard';
                break;
            case "housekeeper":
                this.housekeeper.checked = true;
                service = 'hous';
                break;
            case "cook":
                this.cook.checked = true;
                service = 'cook';
                break;
            default:
                break;
        }
        this.selectService(service);
        let query = `input[value='${data.task}'`;
        document.querySelector(query).checked = true;
        this.taskText.innerText = `to ${data.task}`;
        this.locationText.innerText = `My address is ${data.location}`;
        this.descriptionText.innerText = `${data.description}`;

    }
    renderTasksList(array) {
        this.wrapperTaskCard.innerHTML = '';
        for (let i = 0; i < array.length; i++) {
            this.wraperTask = document.createElement('div');
            this.wraperTask.id = array[i]._id;
            this.wraperTask.className = 'taskCard';
            this.dataForTaskCard = document.createElement('p');
            this.dataForTaskCard.innerText = array[i].data;
            this.textForTeskCard = document.createElement('p');
            this.textForTeskCard.className = 'taskDeskription';
            this.serviceForCard = document.createElement('span');
            this.serviceForCard.id = 'serv';
            this.serviceForCard.innerText = `I need a ${array[i].serviceType}`;
            this.taskForCard = document.createElement('span');
            this.taskForCard.id = 'task';
            this.taskForCard.innerText = ` to ${array[i].task}`;
            this.editButtonForCard = document.createElement('button');
            this.editButtonForCard.innerText = 'EDIT';
            this.editButtonForCard.id = 'edit';
            this.deleteButtonForCard = document.createElement('button');
            this.deleteButtonForCard.innerText = 'DELETE';
            this.deleteButtonForCard.id = 'del';
            this.textForTeskCard.append(this.serviceForCard, this.taskForCard);
            this.wraperTask.append(this.dataForTaskCard, this.textForTeskCard, this.editButtonForCard, this.deleteButtonForCard);
            this.wrapperTaskCard.append(this.wraperTask);
        }
    }

    get taskObj() {
        return {
            "data": "",
            "serviceType": document.querySelector('div.serviceType>input:checked').value,
            "task": document.querySelector('div.task>input:checked').value,
            "location": document.querySelector('input.location').value,
            "description": document.querySelector('input.description').value,
        };
    }

    get getId() {
        return event.target.parentNode.id;
    }
    bindRegestrationButton(method) {
        this.registrButton.addEventListener('click', () => {
            method();
        })
    }
    bindCreateNewTask() {
        this.newTaskButton.addEventListener('click', () => {
            let form = document.querySelector('form.newTaskForm')
            if (form) {
                form.classList.toggle('show');
                if (this.newTaskButton.innerText === '+ NEW TASK') {
                    this.newTaskButton.innerText = '- CANCEL/FINISH CREATING'
                } else {
                    this.newTaskButton.innerText = '+ NEW TASK';
                }
            }
        })
    }

    bindSelectService(method) {
        this.wrapperServiceType.addEventListener('click', () => {
            let service = event.target.className;
            method(service);
        })
    }
    bindSelectTask(method) {
        this.wrapperForTask.addEventListener('click', () => {
            method();
        })
    }
    bindSelectLocation(method) {
        this.location.addEventListener('change', () => {
            method(this.location.value)
        })
    }
    bindAddDescription(method) {
        this.description.addEventListener('change', () => {
            method(this.description.value)
        })
    }
    bindAddTask(methodAdd, methodPut) {
        this.addTaskButton.addEventListener('click', () => {
            if (this.addTaskButton.value != 'EDIT') {
                methodAdd(this.taskObj);
            } else {
                methodPut(this.id, this.taskObj)
            }
        })
    }
    bindEditDeleteTask(methodEdit, methodDel) {
        this.taskBlock.addEventListener('click', () => {
            if (event.target.id === 'edit') {
                methodEdit(this.getId);
            } else if (event.target.id === 'del') {
                methodDel();
            }
        })
    }
    selectService(service) {
        switch (service) {
            case 'elec':
                this.wrapperForTask.innerHTML = '';
                this.wrapperForTask.append(this.wrapperElecticianTask);
                document.querySelector('label.lamp').parentNode.prepend(this.lamp);
                this.lamp.checked = false;
                document.querySelector('label.outlet').parentNode.prepend(this.outlet);
                this.outlet.checked = false;
                document.querySelector('label.wiring').parentNode.prepend(this.wiring);
                this.wiring.checked = false;
                document.querySelector('label.fuse').parentNode.prepend(this.fuse);
                this.fuse.checked = false;
                document.querySelector('label.trouble').parentNode.prepend(this.trouble);
                this.trouble.checked = false;
                this.serviceTypeText.innerText = 'a electician';
                this.taskText.innerText = '';
                break;
            case 'plum':
                this.wrapperForTask.innerHTML = '';
                this.wrapperForTask.append(this.wrapperPlumberTask);
                document.querySelector('label.toilet').parentNode.prepend(this.toilet);
                this.toilet.checked = false;
                document.querySelector('label.sink').parentNode.prepend(this.sink);
                this.sink.checked = false;
                document.querySelector('label.leak').parentNode.prepend(this.leak);
                this.leak.checked = false;
                document.querySelector('label.installSink').parentNode.prepend(this.installSink);
                this.installSink.checked = false;
                document.querySelector('label.shower').parentNode.prepend(this.shower);
                this.shower.checked = false;
                document.querySelector('label.installToilet').parentNode.prepend(this.installToilet);
                this.installToilet.checked = false;
                this.serviceTypeText.innerText = 'a plumber';
                this.taskText.innerText = '';
                break;
            case 'gard':
                this.wrapperForTask.innerHTML = '';
                this.wrapperForTask.append(this.wrapperGardenerTask);
                document.querySelector('label.watering').parentNode.prepend(this.watering);
                this.watering.checked = false;
                document.querySelector('label.trees').parentNode.prepend(this.trees);
                this.trees.checked = false;
                document.querySelector('label.mowing').parentNode.prepend(this.mowing);
                this.mowing.checked = false;
                document.querySelector('label.flower').parentNode.prepend(this.flower);
                this.flower.checked = false;
                this.serviceTypeText.innerText = 'a gardener';
                this.taskText.innerText = '';
                break;
            case 'hous':
                this.wrapperForTask.innerHTML = '';
                this.wrapperForTask.append(this.wrapperHousekeeperTask);
                document.querySelector('label.cleaning').parentNode.prepend(this.cleaning);
                this.cleaning.checked = false;
                document.querySelector('label.washing').parentNode.prepend(this.washing);
                this.washing.checked = false;
                document.querySelector('label.ironing').parentNode.prepend(this.ironing);
                this.ironing.checked = false;
                document.querySelector('label.shopping').parentNode.prepend(this.shopping);
                this.shopping.checked = false;
                document.querySelector('label.babysitting').parentNode.prepend(this.babysitting);
                this.babysitting.checked = false;
                this.serviceTypeText.innerText = 'a houskeeper';
                this.taskText.innerText = '';
                break;
            case 'cook':
                this.wrapperForTask.innerHTML = '';
                this.wrapperForTask.append(this.wrapperCookingTask);
                document.querySelector('label.lunch').parentNode.prepend(this.lunch);
                this.lunch.checked = false;
                document.querySelector('label.dinner').parentNode.prepend(this.dinner);
                this.dinner.checked = false;
                document.querySelector('label.banquet').parentNode.prepend(this.banquet);
                this.banquet.checked = false;
                this.serviceTypeText.innerText = 'a cook';
                this.taskText.innerText = '';
                break;
            default:
                break;
        }
    }
    selectTask() {
        if (event.target.type) {
            this.taskText.innerText = `to ${event.target.value}`;
        }
    }
    selectLocation(loc) {
        this.locationText.innerText = `My address is ${loc}`;
    }
    addDescription(desc) {
        this.descriptionText.innerText = `${desc}`
    }
}