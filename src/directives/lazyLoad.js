// 图片懒加载
const lazyLoad = {
  bind(el, binding) { 
    // 一张1px*1px的图片
    const inventSrc = '../assets/1px.png'
    // 实际需要渲染的src
    const realSrc = binding.value
    // 初始化
    el.setAttribute('data-src', realSrc)
    el.setAttribute('src', inventSrc)
  },
  inserted (el, binding) {
    // IntersectionObserver 有兼容性
    // 判断 是否可用IntersectionObserver监听el
    // 是：则使用IntersectionObserver实现懒加载
    // 否：则时候scroll事件+节流的方法实现
    if (IntersectionObserver) {
      lazyLoad.observe(el, binding.value)
    } else {
      lazyLoad.listenerScroll(el, binding.value)
    }
  },
  observe (el, src) {
    const io = new IntersectionObserver(entries => {
      const realSrc = src
      if (entries[0].isIntersecting) {
        if (realSrc) {
          el.src = realSrc
          el.removeAttribute('data-src')
        }
      }
    })
    io.observe(el)
  },
  listenerScroll (el, src) {
    const handler = lazyLoad.throttle(lazyLoad.load, 300)
    lazyLoad.load(el, src)
    window.addEventListener('scroll', () => handler(el, src))
  },
  load (el, src) {
    const windowHeight = document.documentElement.clientHeight
    const elTop = el.getBoundingClientRect().top
    const elBtm = el.getBoundingClientRect().bottom
    const realSrc = src
    if (elTop - windowHeight < 0 && elBtm > 0) {
      if (realSrc) {
        el.src = realSrc
        el.removeAttribute('data-src')
      }
    }
  },
  // 节流
  throttle (fn, delay) {
    let timer, preTime
    return function (...args) {
      const currTime = Date.now()
      const context = this
      if (!preTime) preTime = currTime
      clearTimeout(timer)

      if (currTime - preTime > delay) {
        preTime = currTime
        fn.apply(context, args)
        clearTimeout(timer)
        return
      }

      timer = setTimeout(() => {
        preTime = Date.now()
        timer = null
        fn.apply(context, args)
      }, delay)
    }
  }
}

export default lazyLoad