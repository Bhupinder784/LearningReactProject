import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'


function myApp(){
  return (
    <div>
      <h1>CustomeApp | Hi</h1>
    </div>
  )
}

/*
const reactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Click me to visit google'
}
*/

const anotherElement = (
  <a href='http://google.com' target='_blank'>Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target : '_blank'},
  'Click me',
  anotherElement
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,


  reactElement
)
