import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {observable} from 'mobx'

class Counter {
  @observable count = 0
  decrement () { this.count-- }
  increment () { this.count++ }
}

const counter = new Counter()

ReactDOM.render(
  <App counter={counter} />,
  document.getElementById('app')
)
