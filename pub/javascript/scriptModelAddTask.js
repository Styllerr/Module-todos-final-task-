class ModelAddTask {
    constructor() {
        this.xhttp = new XMLHttpRequest();
    }
    addTasktoDB(data) {
        data.data = this.taskData;
        try {
            fetch('http://127.0.0.1:3000/addTask/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

        } catch (err) {
            console.error('Fetch Error', err);
        }
    }

    async updatedTaskList() {
        try {
            const response = await fetch('http://127.0.0.1:3000/tasks')
            const data = await response.json()
            return data
        } catch (err) {
            console.error('Fetch Error', err);
        }
    }
    async getTaskForEdit(id) {
        try {
            const response = await fetch('http://127.0.0.1:3000/tasks/' + id, {
                method: 'GET'
            })
            const data = await response.json()
            return data
        } catch (err) {
            console.error('Fetch Error', err);
        }
    }
    deleteTask(id) {
        try {
            fetch('http://127.0.0.1:3000/tasks/' + id, {
                method: 'delete'
            })

        } catch (err) {
            console.error('Fetch Error', err);
        }
    }
    putTasktoDB(id, data) {
        try {
            fetch('http://127.0.0.1:3000/tasks/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
        } catch (err) {
            console.error('Fetch Error', err);
        }
    }

    get taskData() {
        let now = new Date();
        let options = {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
        };
        return now.toLocaleString("en-US", options)
    }
}