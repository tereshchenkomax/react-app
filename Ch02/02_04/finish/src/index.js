import React from 'react'
import {render} from 'react-dom'
//import {hello, goodbye} from './lib'
//import Clock from './lib'
import { SkiDayCount } from './components/SkiDayCount'
import App from './components/App'

window.React = React

render(
    <App />, document.getElementById('react-container')
)

// render(
// 	<SkiDayCount backcountry={false}/>,
//     document.getElementById('react-container')
// )

// render(
// 	<div>{hello}{goodbye}</div>,
//     document.getElementById('react-container')
// )
//

// render(
// 	<Clock />,
//     document.getElementById('clock-container')
// )