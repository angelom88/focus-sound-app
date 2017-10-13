import React from 'react'
import ReactDOM from 'react-dom'


class FocusSound extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    let mediaSrc = 'assets/media/' + this.props.name + '.mp3'
    let audio;
    if (this.props.autoPlay === 'true')  {
      audio = 
              <audio preload="none" controls loop autoPlay>
                <source src={mediaSrc}/>
              </audio>
    } else {
      audio = 
              <audio preload="none" controls loop>
                <source src={mediaSrc}/>
              </audio>
    }

    return (
        <div id={this.props.name}>
          <div className="wrapper">
            {audio}
          </div>
        </div>
    )
  }
}

FocusSound.defaultProps = {
  autoPlay: 'true'
}

ReactDOM.render(
    <div>
      <FocusSound name='fire'/>
      <FocusSound name='waves'/>
      <FocusSound name='waves'/>
      <FocusSound name='rain'/>
      <FocusSound name='birds' autoPlay='false'/>
    </div>,
    document.querySelector('#app')
)
