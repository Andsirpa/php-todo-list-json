const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Todo List',

            // array di oggetti
            taskList: [],
        };
    },

    methods: {
        // chiamo la taskList dalla API
        fetchTaskList() {
            axios.get('../BACK-END/api/get-tasklist.php').then((response) => {
                this.taskList = response.data;
            });

        },
    },

    mounted() {
        this.fetchTaskList();
    },
});

app.mount('#app');