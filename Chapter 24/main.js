Vue.component('coupon', {

    props: ['code'],

    template: `

    <input type="text" :value="code" @input = "upadateCoupon($event.target.value)" ref = "input">

    `,

    data() {
        return {

            invalids: ['ALLFREE', 'something else'],

        }
    },

    methods: {
        upadateCoupon(code){
            if(this.invalids.includes(code)) {

            this.$emit('applied');

            this.$refs.input.value = code = '';
            }

            this.$emit('input', code)

        }
    }
})
let store = {
    user: {
        name: 'JINSAN'
    }
};


var app = new Vue({

    el: '#root',

    data: {
        foo: 'bar',
        shared: store,
        coupon: 'foobar',
        expired : false
    },

    methods: {

        couponExpired(){
            this.expired = true;
        }
    }
})

var app = new Vue({

    el: '#root2',

    data: {
        foo: 'other bar',
        shared: store
    }
})