var app = new Vue({
    el : '#root',
    
    data : {
        names: ['jinsan', 'aldrin', 'milan', 'navaneeth'],
        newname: ''
    },

    methods: {
        addname(){
            this.names.push(this.newname)
            this.newname = ''
        }
    }


})