const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Todo List',

            // array di oggetti
            taskList: [],

            // nuovo task da fare 
            newTask: {
                text: '',
                done: false,
            }
        };
    },

    methods: {
        // chiamo la taskList dalla API
        fetchTaskList() {
            axios.get('../BACK-END/api/get-tasklist.php').then((response) => {
                this.taskList = response.data;
            });

        },

        // aggiungo una nuova task
        fetchNewTask() {
            // dati da inviare
            const data = {
                text: this.newTask.text,
                done: false,


            };

            const params = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            // invio la richiesta
            axios.post('../BACK-END/api/store.php', data, params).then((response) => {
                const taskListUpdated = response.data;

                // aggiorno la tasklist con la versione aggiornata
                this.taskList = taskListUpdated;

                // pulisco il campo di testo
                this.newTask.text = '';
            });
        }
    },

    mounted() {
        this.fetchTaskList();
    },
});

app.mount('#app');