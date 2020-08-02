import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import { UiButton } from '../Ui'
import { CardProject } from '../CardProject'
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
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
        console.log(this.props)
        return (
            <div className="widgetProjects">
                <div className="widgetProjects-top">
                    <div className="widgetProjects-title">список проектов</div>
                    <div className="widgetProjects-button">
                        <UiButton onClick={this.handleOpenModal} value="Добавить проект"/>
                        <ReactModal 
                            isOpen={this.state.showModal}
                            contentLabel="Minimal Modal Example"
                        >
                        <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
                    </div>
                </div>
                <div className="widgetProjects-cards">
                    <div className="widgetProjects-cards_card">
                        <CardProject/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    projects: state.projects
}), { addProject })(WidgetProjects)
