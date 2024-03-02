const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Todo List',

            // array di oggetti
            taskList: [
                // do a ciascun oggetto un testo e uno status 
                {
                    text: 'Task 1',
                    done: true,
                },
                {
                    text: 'Task 2',
                    done: false,
                },
                {
                    text: 'Task 3',
                    done: false,
                },
            ]
        };
    },
});

app.mount('#app');