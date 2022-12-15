import Vue from 'vue'

function debounce(fn,time) {
  var timeout = null
  return ()=>{
    clearTimeout(timeout)
    timeout =  setTimeout(function(){
      //fn()
      fn.apply(this,arguments)
    },time)
  }
}


/*
* element 表格实现滚动加载
*/

Vue.directive('loadmore', {
  bind(el, binding) {
    const selectWrap = document.body
    const handle = function() {
      let sign = 1
      const scrollDistance = selectWrap.scrollHeight - selectWrap.scrollTop - selectWrap.clientHeight
      if (scrollDistance <= sign) {
        binding.value()
      }
    }
    selectWrap.addEventListener('scroll', debounce(handle, 500))
  }
})


