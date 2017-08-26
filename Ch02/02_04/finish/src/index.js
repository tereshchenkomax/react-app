import React from 'react'
import { render } from 'react-dom'
import {hello, goodbye} from './lib'
import Clock from './lib'
import SkiDayCount from './components/SkiDayCount'

window.React = React

render(
	<SkiDayCount total={50} powder={20} backcountry={5} goal={100}/>,
    document.getElementById('react-container')
)

// render(
// 	<div>{hello}{goodbye}</div>,
//     document.getElementById('react-container')
// )
//

// render(
// 	<Clock />,
//     document.getElementById('clock-container')
// )