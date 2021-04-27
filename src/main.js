import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// 添加git文件
// git init

// 创建vue.config.js
// git add . （添加至缓存区）
// git commit -m 'xxx' （提交） -m代表注释

// git status
// 查看当前状态（被修改的文件）

// git push 提交到服务器

// person acess token
// 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

// git remote rm origin
// git remote add origin https://github.com/liubingbing-520/bingshopmall.git
// git remote add origin git@github.com/liubingbing-520/bingshopmall
// git push -u origin master
// git pull --rebase origin master
// git push -u origin master -f
