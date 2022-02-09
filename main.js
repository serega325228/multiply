let display = document.querySelector('.display')
let colors = ['red', 'blue', 'green', 'white', 'orange', 'purple', 'yellow', 'cyan', 'gold', 'hotpink']

display.textContent = ''

for (let i = 1; i <= 10; i++) {
    let column = document.createElement('div')
    column.style.backgroundColor = colors[i]
    for (let j = 1; j <=10; j++) {
        let result = i*j;
        let str = document.createElement('p')
        display.appendChild(column).appendChild(str).textContent = `${i} * ${j} = ${result}`
    }
}


