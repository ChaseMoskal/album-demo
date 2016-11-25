
import * as React from "react"
import * as ReactDOM from "react-dom"

import Counter from "./Counter";

export interface AppProps {}
export interface AppState {}

/**
 * Root application component.
 */
export default class App extends React.Component<AppProps, AppState> {

  render() {
    return (
      <div className="app">
        <h1>Album Demo WIP</h1>
        <p>Based on Chase Moskal's <a href="https://github.com/ChaseMoskal/glorious-frontend">glorius-frontend</a>.</p>
        <hr/>
        <Counter start={0}/>
      </div>
    )
  }
}
