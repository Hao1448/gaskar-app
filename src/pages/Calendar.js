import React from 'react'
import NavMenu from '../components/NavMenu'

export const Calendar = () => {
  return (
    <div className="projects">
      <div className="projects-grid"> 
          <div className="projects_col-menu">
              <NavMenu/>
          </div>
          <div className="projects_col-main">
            Calendar
          </div>
      </div> 
    </div>
  )
}
