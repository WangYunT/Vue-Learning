var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  var app2 = new Vue({
    el: '#app2',
    data: {
      message : '页面加载于' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app3',
    data: {
      seen: true
    }
  })

  var app4 = new Vue({
    el: '#app4',
    data:{
      msg:[
        '学习 javascript',
        '学习Vue',
        '整个牛项目'
      ],
      msg2:{
        a:'ok',
        b:'hello'
      }
    }
  })

var app5=new Vue({
  el: '#app5',
  data:{
    message: 'Hello Vue js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app6',
  data: {
    message : 'Hello Vue!'
  }
})
// app7 start
Vue.component('todo-item',{
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
  el:'#app7',
  data:{
    groceryList:[
      {id:0,text:'蔬菜'},
      {id:1,text:'奶酪'},
      {id:2,text:'随便其它什么人吃的东西'}
    ]
  }
})
// app7 end

var watchExampleVM = new Vue({
  el: '#watch_example',
  data: {
    question : '',
    answer : 'i cannot give you an answer until you ask a question!'
  },
  watch: {
    //如果 'question'发生改变，这个函数就会运行
    question : function (newQuestion,oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created : function() {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer,500)
  },
  methods : {
    getAnswer: function(){
      if(this.question.indexOf('?') === -1){
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api').then(function (response){
        vm.answer = _.capitalize(response.data.answer)
      })
      .catch(function(error){
        vm.answer = 'Error! Could not reach the API.' + error
      })
    }
  }
})