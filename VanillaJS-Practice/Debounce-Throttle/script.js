const inputField = document.getElementById('input')
const outputField = document.getElementById('normalOutput')
const debouncedOutput = document.getElementById('debouncedOutput')
const throttledOutput = document.getElementById('throttledOutput')


const updateDebouncedText = debounce((text) => {
  debouncedOutput.textContent = text;
})

const updateThrottledText = throttle((text) => {
  throttledOutput.textContent = text;
})

inputField.addEventListener('input', (e) => {
  outputField.textContent = e.target.value
  updateDebouncedText(e.target.value)
  updateThrottledText(e.target.value)
})

function debounce(cb, delay=1000) {

  let timer

  return (...args) => {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      cb(...args)
    }, delay)
  }
  
}

function throttle(cb, delay=1000) {

  let shouldWait = false

  return (...args) => {
    if(shouldWait === true) return
    
    cb(...args);

    shouldWait = true;
    
    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
  
}