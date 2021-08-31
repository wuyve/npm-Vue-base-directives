// 页面添加水印
const waterMarker = {
  bind (el, binding) {
    waterMarker.addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
  },
  addWaterMarker (str, parentNode, font, textColor) {
    const canvas = document.createElement('canvas')
    parentNode.appendChild(canvas)
    canvas.width = 200
    canvas.height = 150
    canvas.style.display = 'none'
    const context = canvas.getContext('2d')
    context.rotate((-20 * Math.PI) / 180)
    context.font = font || '16px Microsoft JhengHei'
    context.fillStyle = textColor || 'rgba(180, 180, 180, .3)'
    context.textAlign = 'left'
    context.textBaseline = 'middle'
    context.fillText(str, canvas.width / 10, canvas.height / 2)
    parentNode.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`
  }
}


export default waterMarker