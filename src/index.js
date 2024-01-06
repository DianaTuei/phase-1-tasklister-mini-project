document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener("submit",(e) => {
    e.preventDefault();
    handleToDo(e.target.newT.value)
    form.reset()
  })
});

function handleToDo (toDo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener("click", handleDelete)
  btn.textContent = 'x'
  li.textContent = `${toDo} `
  li.appendChild (btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}