import style from './Layout.module.css';
import { Route, Routes, NavLink } from "react-router-dom";
import { useRef } from 'react'

import HomePage from '../../pages/HomePage'
import AboutProjectsPage from '../../pages/AboutProjectsPage'
import SkillsPage from '../../pages/SkillsPage'
import AboutWorkPlacesPage from '../../pages/AboutWorkPlacesPage';
import ContactsPage from '../../pages/ContactsPage';
import Footer from '../Footer';

function Layout() {
  const mobileNav = useRef(null);
  const brg = useRef(null);

  function openNav(){
    const element = mobileNav.current;
    const burger = brg.current;

    element.classList.toggle(style.open);
    burger.classList.toggle(style.burgerOpen);

  }
    return (
      <div className={style.layoutContainer}>
        <div className={style.wrapper}>
          <div className={style.desktopnav}>
            <nav>
              <NavLink to='/'>Проєкти</NavLink>
              <NavLink to='/about-project'>Докладніше</NavLink>
              <NavLink to='/skills'>Навички</NavLink>
              <NavLink to='/workplaces'>Робочі місця</NavLink>
              <NavLink to='/contacts'>Контакти</NavLink>
            </nav>
          </div>
          <div className={style.mobilenav}>
            <div onClick={openNav} className={style.menu}>
              <div className={style.burger} ref={brg}></div>
            </div>
            <nav ref={mobileNav}>
              <NavLink to='/'>Проєкти</NavLink>
              <NavLink to='/about-project'>Докладніше</NavLink>
              <NavLink to='/skills'>Навички</NavLink>
              <NavLink to='/workplaces'>Робочі місця</NavLink>
              <NavLink to='/contacts'>Контакти</NavLink>
            </nav>
          </div>
          
        </div>
        <main className='content_container'>
          <Routes>
            <Route index element={<HomePage/>} />
            <Route path='about-project' element={< AboutProjectsPage />} />
            <Route path='skills' element={< SkillsPage />} />
            <Route path='workplaces' element={< AboutWorkPlacesPage />} />
            <Route path='contacts' element={< ContactsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }

  export default Layout