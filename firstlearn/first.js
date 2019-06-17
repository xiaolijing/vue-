/**
 * Created by Lijing on 2019/6/5.
 */
(function () {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello , Vue!'
        }
    });

    var app2 = new Vue({
        el:"#app2",
        data:{
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    });

    var app3 = new Vue({
        el: '#app3',
        data: {
            seen: true
        },
        methods:{
            changeShowWord:function(){
                this.seen = !this.seen;
            }
        }
    });

    var app4 = new Vue({
        el:"#app4",
        data:{
            todos:[
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ]
        }
    });

    Vue.component('cmptDesp', {
        template: '<ul><li>我是一个component，定义component的位置需要在使用的el的前面</li>' +
        '<li>这是个待办项</li>' +
        '<li>控件命名也是驼峰规则的，或者带-的命名</li>' +
        '</ul>'
    });

    var app5 = new Vue({
        el:"#app5",
        data:{
            message:'hello vue.js'
        },
        methods:{
            reversMessage:function(){
                this.message = this.message.split(' ').reverse().join(' ')
            }
        }
    });

    Vue.component('cmpt-send',{
        props:['items'],
        template:'<div><ul v-for="item in items"><li><span>{{item.id}}</span><span>{{item.text}}</span></li></ul></div>'
    });

    Vue.component("CompOne",{
        props: ['value'],
        template: '<div><input type="text" @input="handleInput" :value="value"></div>',
        data:function () {
            return {}
        },
        methods: {
            handleInput:function(e){
                this.$emit('input', e.target.value)
            }
        }
    });
    var app7 = new Vue({
        el:"#app7",
        data:{
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ]
        }
    });

    var app8 = new Vue({
        el: '#app8',
        template: '<div>' +
        '<div>属性的绑定使用:,方法的绑定使用@</div>' +
        '{{obj.vv}}<br>' +
        '{{value}}<comp-one :value1="value" @input="value = arguments[0];obj.aa=arguments[0]"></comp-one></div>',
        data : {
                value: '123',
                obj:{aa:'miao',vv:'wangwang'}
        },watch:{
            obj:{
                handler:function (newVal,oldVal) {
                    console.log(newVal+oldVal);
                },
                deep:true
            }
        }
    });
})();



