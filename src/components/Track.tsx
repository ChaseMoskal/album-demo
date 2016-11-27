
import * as React from "react"
import * as ReactDOM from "react-dom"

/**
 * List item for an album track.
 */
export default class Track extends React.Component<{
  title: string
  duration: string
  sample?: string
}, {
  playing: boolean
}> {

  context: {
    playAudio: (src: string) => void
  }

  static contextTypes = {
    playAudio: React.PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {playing: false}
  }

  render() {
    const play = () => {
      this.setState({playing: true})
      this.context.playAudio(this.props.sample)
    }
    const stop = () => {
      this.setState({playing: false})
      this.context.playAudio(null)
    }

    return (
      <li className="track">

        {this.props.sample
          ? (
            <button
              className={this.state.playing ? "play playing" : "play"}
              onClick={this.state.playing ? stop : play}>
                {this.state.playing ? <span>❚❚</span> : <span>▶</span>}
            </button>
          )
          : null}

        <span className="title">{this.props.title}</span>
        <span className="duration">{this.props.duration}</span>
      </li>
    )
  }
}
