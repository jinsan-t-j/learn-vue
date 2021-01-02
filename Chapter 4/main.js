var app = new Vue({
    el : '#root',
    
    data : {
        className : 'color-red',
        isLoading :'',
        message: "hello world",
        newmessage : 'sksaT',
        tasks : [
            {description: 'first list', completed: true},
            {description: 'secons list', completed: true},
            {description: 'third list', completed: false},
            {description: 'fourth list', completed: false},
            {description: 'fifth list', completed: true},
            {description: 'sixth list', completed: false},
        ]
    },

    methods: {
        changeClass(){
            ( this.isLoading) ?  this.isLoading = false :  this.isLoading = true;
        }
    },

    computed: {
        reversedMessage() {
            
            return this.newmessage.split('').reverse().join('');
        },

        incompleteTasks() {
            
            return this.tasks.filter(task => ! task.completed)
        },

        completeTasks() {
            
            return this.tasks.filter(task => task.completed)
        }
    }


})