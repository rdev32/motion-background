window.addEventListener('load', () => {
  const container = document.querySelector('.container')
  let inside = true

  container.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX - container.offsetLeft
    const mouseY = e.pageY - container.offsetTop

    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    const posX = (mouseX / containerWidth) * 100
    const posY = (mouseY / containerHeight) * 100

    container.style.transition = 'background-position 0.5s ease'
    container.style.backgroundPosition = `${posX}% ${posY}%`
  })

  window.addEventListener('mouseout', () => {
    if (inside) {
      container.style.backgroundPosition = 'center'
      container.style.transition = 'background-position 0.5s ease'
    }
  })

  container.addEventListener('mouseenter', () => {
    inside = true
  })

  container.addEventListener('mouseleave', () => {
    inside = false
  })

})

