var example_1 = new Vue({
   el: '#example-1',
   data :  {
    counter : 0
   }
})

var example_2 = new Vue({
    el : '#example_1',
    data : {
        name : 'Vue.js'
    },
    methods: {
        greet : function(event){
            // this 在方法里指向当前Vue实例
            alert( 'Hello' + this.name + '!')
            // event 是原生DOM事件
            if(event){
                alert(event.target.tagName)
            }
        }
    }
})

var example_3 = new Vue({
    el: '#example-3',
    methods:{
        say : function (message){
            alert(message)
        }
    }
})