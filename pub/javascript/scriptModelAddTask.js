class ModelAddTask {
    constructor() {
        // this.url = 'https://module-todos.herokuapp.com';
        this.url = 'http://localhost:3000';
    }
    async addTasktoDB(data) {
        data.data = this.taskData;
        try {
            await fetch(this.url + '/api/tasks/addTask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
        } catch (err) {
            console.error('Fetch Error', err);
        }
    }

    async updatedTaskList() {
        try {
            const response = await fetch(this.url + '/api/tasks')
            const data = await response.json()
            return data
        } catch (err) {
            console.error('Fetch Error', err);
        }
    }
    async getTaskForEdit(id) {
        try {
            const response = await fetch(this.url + '/api/tasks/' + id, {
                method: 'GET'
            })
            const data = await response.json()
            return data
        } catch (err) {
            console.error('Fetch Error', err);
        }
    }
    async deleteTask(id) {
        try {
            await fetch(this.url + '/api/tasks/' + id, {
                method: 'delete'
            })
        } catch (err) {
            console.error('Fetch Error', err);
        }
    }
    async putTasktoDB(id, data) {
        try {
            await fetch(this.url + '/api/tasks/' + id, {
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