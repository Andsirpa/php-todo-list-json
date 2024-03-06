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



            // invio la richiesta
            axios.post('../BACK-END/api/store.php', data).then((response) => {
                this.taskList = response.data;
                this.newTask.text = '';
            });
        },


        // metodo per eliminare un task
        deleteTask(task) {

            axios.post('../BACK-END/api/delete-task.php', task)
                .then(() => {

                    this.fetchTaskList();
                });
        },



    },


    mounted() {
        this.fetchTaskList();
    },
});

app.mount('#app');