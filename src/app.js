import './app.less'

const root = document.querySelector('#root')
const img = document.createElement('img')
img.src = 'https://picsum.photos/300/300'
const title = document.createElement('H2')
title.innerHTML = 'react-ts-rjx-cli'
root.append(img)
root.append(title)
