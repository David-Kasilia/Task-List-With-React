import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({ title, onAdd,showAdd }) => {
 const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
     { location.pathname === '/' && <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'}onClick={onAdd}/> }
    </header>
  )
}

// using props
Header.defaultProps = {
    title: 'Task Tracker'
}
export default Header
