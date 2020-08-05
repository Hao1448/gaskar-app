import React from 'react'
import NavMenu from '../components/NavMenu'
import  WidgetProjects  from '../components/WidgetProjects'
import { ProfileImage } from '../components/ProfileImage'
import { UiTabs } from '../components/Ui/UiTabs'
import { NavLink } from 'react-router-dom'

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-grid"> 
          <div className="projects_col-menu">
              <NavMenu/>
          </div>
            <div className="projects_col-main">
              <div className="projects-header">
                <NavLink to='/'>
                  <ProfileImage/>
                </NavLink>
              </div>    
              <div className="projects-title">
                Проекты
              </div>
              <UiTabs/>
              <WidgetProjects/>
          </div>
      </div> 
    </div>
  )
}
