import React from 'react'
import ReactDOM from 'react-dom'
import BlocklyDiv from './blocklyDiv'
import './app.css'

ReactDOM.render(
  <div className='fullSize'>
    <h> hello, blockly! </h>
    <BlocklyDiv />
  </div>,
  document.getElementById('app')
)
