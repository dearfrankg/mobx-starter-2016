import React from 'react'
import Blocks from './Blocks'
import {observer} from 'mobx-react'

@observer
export default class App extends React.Component {
  render () {
    const {counter} = this.props
    return (
      <div>
        <h3>Mobx Starter App 2016</h3>
        <button onClick={() => counter.decrement()}>-</button>
        <button onClick={() => counter.increment()}>+</button>
        <div>{counter.count}</div>
        <Blocks count={counter.count} />
      </div>
    )
  }
}
