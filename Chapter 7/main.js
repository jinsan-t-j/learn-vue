window.Event = new class {

        constructor() {

            this.vue = new Vue();
        }

        fire(event, data = null) {
            this.vue.$emit(event, data);
        }

        listen(event, callback) {
            this.vue.$on(event, callback);
        }
}

Vue.component('coupon', {
    template: '<input placeholder = "Enter the coupon code" @input = onCouponApplied>',

    methods: {
        onCouponApplied() {

            Event.fire('applied');
        }
    }
    
})


var app = new Vue({
    el : '#root',

    data() {
        return {
            couponApplied : false
        }
    },

   created() {
        Event.listen('applied', () => alert('hello'));
   },

})