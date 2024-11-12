import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Breadcrumbs = () => {

  const {pathname} = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map(crumb => {
        currentLink += `/${crumb}`

        return (
          <ul className ="crumb" key={crumb}>
           <li>
            <Link to="/">
            <i className="fa-solid fa-house"></i> homepage
            </Link>
            </li>
            <li>
              <i className="fa-solid fa-angles-right fa-xs"></i>
            </li>
            <li>
            <Link className="currentLink" to={currentLink}>{crumb}</Link>
            </li>
          </ul>
        )
      })


  return (
    <section className="page-title" style={{ backgroundColor:`${pathname === '/' ? "var(--color-bg)" : "var(--color-bg2)" }`}}>
      <div className="container">
        <div className="breadcrumbs">
        
        {crumbs}
        
          
        </div>
      </div>

    </section>
  )
}

export default Breadcrumbs