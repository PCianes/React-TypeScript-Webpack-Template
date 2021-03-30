import './styles.css'
import IMAGE from './computer.jpg'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>Hello World - {process.env.NODE_ENV}</h1>
      <p>Name: {process.env.name}</p>
      <p>Image</p>
      <img src={IMAGE} alt="test image" />
      <p>SVG</p>
      <img src={LOGO} alt="test logo" width="100" />
      <ClickCounter />
    </>
  )
}
