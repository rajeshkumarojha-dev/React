import React from 'react'
import {Link} from 'react-router-dom'
const Linkweb = () => {
  return (
    <div>
      <Link to='/'>Home Page</Link><br></br>
      <Link to='/searchbar'>SearchBar</Link><br />
      <Link to='/forms'>Forms</Link><br />
      <Link to='/array'>Array Mapping</Link><br />
      <Link to='/Hideshow'>Hide And Show</Link><br />
      <Link to='/printval'>Print Value</Link><br />
      <Link to='/usestate'>UseState</Link><br />
      <Link to='/useeffect'>UseEffect</Link><br />
      <Link to='/usememo'>UseMemo</Link><br />
      <Link to='/useref'>UseRef</Link><br />
      <Link to='/subcomponent'>Subcomponent</Link><br />
    </div>
  )
}

export default Linkweb
