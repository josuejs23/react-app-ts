import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"
import logo from './../logo.svg'
import { About } from '../pages/About';
import { Users } from "../pages/Users";


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <NavLink to='/' className={({isActive})=> isActive?'nav-active':''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({isActive})=> isActive?'nav-active':''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={({isActive})=> isActive?'nav-active':''}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
