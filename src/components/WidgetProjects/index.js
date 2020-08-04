import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { UiButton } from '../Ui'
import { CardProject } from '../CardProject'
import { UiInput } from '../Ui'
import  { addProject } from '../../_actions'
import './WidgetProjects.scss'

class WidgetProjects extends React.Component {
    constructor () {
        super();
            this.state = {
            showModal: false
        };
      
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    submitHandler (event) {
        event.preventDefault()
        const newProject = {
            name,
            duration,
            leader,
            admin
        }
        this.props.addProject({newProject})
    }

    render () {
        const { projects } = this.props;

        const customStyles = {
            overlay: {
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridGap: '20px'
            },
            content : {
                position: 'relative',
                gridColumn: '4 / span 5',
                alignSelf: 'center'
            }
          }
          console.log(this.props)
        return (
         
            <div className="widgetProjects">
                <div className="widgetProjects-top">
                    <div className="widgetProjects-title">список проектов</div>
                    <div className="widgetProjects-button">
                        <UiButton onClick={this.handleOpenModal} value="Добавить проект"/>
                        <Modal 
                            isOpen={this.state.showModal}
                            style={customStyles}
                        >
                            <button onClick={this.handleCloseModal}>Закрыть</button>
                            <form onSubmit={this.submitHandler} className="widget-modal">
                                Добавить проект
                                <UiInput placeholder="Название проекта"/>
                                <UiInput placeholder="Даты выполнения"/>
                                <UiInput placeholder="Руководитель проекта"/>
                                <UiInput placeholder="Администратор проекта"/>
                                <UiButton type="submit" value="Создать проект"/>
                            </form>
                        </Modal>
                    </div>
                </div>
                { projects.map((project) => 
                    <div className="widgetProjects-cards">
                        <div className="widgetProjects-cards_card">
                            <CardProject project={project}/>
                        </div>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default connect(state => ({
    projects: state.projects
}), { addProject })(WidgetProjects)
