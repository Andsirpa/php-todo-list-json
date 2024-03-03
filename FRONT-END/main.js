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
                    'Content-Type': 'multipart/form-data',
                },
            };

            axios.post('../BACK-END/api/store.php', data, params).then((response) => {
                this.taskList = response.data;
            });
        },
    },

    mounted() {
        this.fetchTaskList();
    },
});

app.mount('#app');