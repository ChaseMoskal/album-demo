
import * as React from "react"
import * as ReactDOM from "react-dom"

import Track from "./Track"

/**
 * Exhibits an album and its details.
 * Places children into an ordered list (<ol>).
 */
export default class Album extends React.Component<{
  title: string
  artist: string
  art: string
  release: string
  label: string
  genre: string
  notes?: string
  buy?: string
}, {
  playingAudioSrc: string
}> {

  static childContextTypes = {
    playAudio: React.PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {playingAudioSrc: null}
  }

  getChildContext() {
    return {
      playAudio: (src: string) => this.setState({playingAudioSrc: src})
    }
  }

  render() {
    return (
      <section className="album">
        <div className="cover">
          <div className="art">
            <img src={this.props.art} alt=""/>
          </div>
          <div className="prime-info">
            <h1 className="heading">
              <strong className="title">{this.props.title}</strong>
              <br/>
              <span className="artist">{this.props.artist}</span>
            </h1>
          </div>
        </div>

        {this.state.playingAudioSrc
          ? <audio src={this.state.playingAudioSrc} autoPlay={true} loop={true}/>
          : null}

        <ol className="tracklist">
          {this.props.children}
        </ol>

        {this.props.notes
          ? <p className="notes">{this.props.notes}</p>
          : null}

        <div className="details">
          <div>
            <p>{this.props.label}</p>
            <p>{this.props.genre}</p>
          </div>
          <div>
            <p>Released {this.props.release}</p>
            {this.props.buy
                ? <p><a href={this.props.buy} target="_blank">Buy now</a></p>
                : null}
          </div>
        </div>
      </section>
    )
  }
}
