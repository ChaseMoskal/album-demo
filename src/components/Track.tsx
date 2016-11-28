
import * as React from "react"
import * as ReactDOM from "react-dom"

/**
 * List item for an album track.
 */
export default class Track extends React.Component<{
  title: string
  duration: string
  playing?: boolean
  sample?: string
}, {}> {
  context: { playAudio: (src: string) => void }
  static contextTypes = { playAudio: React.PropTypes.func }

  constructor(props) {
    super(props)
  }

  render() {
    const play = () => this.context.playAudio(this.props.sample)
    const stop = () => this.context.playAudio(null)

    return (
      <li className="track">

        {
          this.props.sample
            ? (
              <div className="controls">
                <button
                  className={this.props.playing ? "play playing" : "play"}
                  onClick={this.props.playing ? stop : play}>
                    {this.props.playing ? <span>❚❚</span> : <span>►</span>}
                </button>
              </div>
            )
            : null
        }

        <span className="title">{this.props.title}</span>
        <span className="duration">{this.props.duration}</span>
      </li>
    )
  }
}
