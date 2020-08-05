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
        event.preventDefault();
        const { name, duration, leader, admin } = event.target.elements;
        const newProject = {
            name: name.value,
            duration: duration.value,
            leader: leader.value,
            admin: admin.value,
        };
        this.props.addProject(newProject);
        this.setState({ showModal: false });
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
                            <form onSubmit={this.submitHandler} className="widget-modal">
                                <div className="widget-modal_top"> 
                                    <div className="widget-modal_title">Добавить проект</div>
                                    <button onClick={this.handleCloseModal}>Закрыть</button>
                                </div>
                                <div className="widget-modal_input">
                                    <UiInput name="name" placeholder="Название проекта" />
                                </div>
                                <div className="widget-modal_input">
                                    <UiInput name="duration" placeholder="Даты выполнения" />
                                </div>
                                <div className="widget-modal_input">
                                    <UiInput name="leader" placeholder="Руководитель проекта" />
                                </div>
                                <div className="widget-modal_input ">
                                    <UiInput name="admin" placeholder="Администратор проекта" />
                                </div>
                                <div className="widget-modal_button">
                                    <UiButton type="submit" value="Создать проект" />
                                </div>
                            </form>
                        </Modal>
                    </div>
                </div>
               
                    <div className="widgetProjects-cards">
                    { projects.map((project) => 
                        <div className="widgetProjects-cards_card">
                            <CardProject project={project}/>
                        </div>
                        )
                }
                    </div>
                  
            </div>
        )
    }
}

export default connect(state => ({
    projects: state.projects
}), { addProject })(WidgetProjects)
