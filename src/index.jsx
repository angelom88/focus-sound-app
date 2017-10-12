import React from 'react'
import ReactDOM from 'react-dom'


class FocusSound extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    let mediaSrc = 'assets/media/' + this.props.name + '.mp3'
    return (
        <div id={this.props.name}>
          <div className="wrapper">
            <audio preload="none" controls loop autoPlay='true'>
              <source src={mediaSrc}/>
            </audio>
          </div>
        </div>
    )
  }
}

ReactDOM.render(
    <div>
      <FocusSound name='fire'/>
      <FocusSound name='waves'/>
      <FocusSound name='waves'/>
      <FocusSound name='rain'/>
      <FocusSound name='birds'/>
    </div>,
    document.getElementById('app')
)