import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom';
import Info from './Info'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Info />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})