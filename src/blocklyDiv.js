import React from 'react'

export default class BlocklyDiv extends React.Component {
  render() {
    return(
      <div style={{height: '100%', width: '100%', position: 'relative'}}>
        <div ref={ ele => this.innerBlocklyDiv = ele } style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}} />
        <div dangerouslySetInnerHTML={{__html: require('text-loader!./toolbox.xml')}} />
      </div>
    )
  }
  componentDidMount() {
    // inject blockly
    var workspace = Blockly.inject(this.innerBlocklyDiv,
      {toolbox: document.getElementById('toolbox'),
        grid: {spacing: 40, colour: 'rgb(57, 65, 90)', length: 42},
        zoom: {controls: false, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2},
      });
  }
}
