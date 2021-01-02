Vue.component('coupon', {
    template: '<input placeholder = "Enter the coupon code" @input = onCouponApplied>',

    methods: {
        onCouponApplied() {
            this.$emit('applied');
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

    methods: {

        onCouponApplied() {
            this.couponApplied = true;
        }
    }

})