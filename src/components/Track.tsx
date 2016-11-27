
import * as React from "react"
import * as ReactDOM from "react-dom"

/**
 * List item for an album track.
 */
export default class Track extends React.Component<{
  title: string
  duration: string
  sample?: string
}, {}> {

  render() {
    return (
      <li className="track">
        {this.props.sample
          ? <button className="play">▶</button>
          : null}
        <span className="title">{this.props.title}</span>
        <span className="duration">{this.props.duration}</span>
      </li>
    )
  }
}
