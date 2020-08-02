import React from 'react'
import NavMenu from '../components/NavMenu'
import  WidgetProjects  from '../components/WidgetProjects'

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-grid"> 
          <div className="projects_col-menu">
              <NavMenu/>
          </div>
          <div className="projects_col-main">
            <WidgetProjects/>
          </div>
      </div> 
    </div>
  )
}
