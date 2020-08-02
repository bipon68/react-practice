import React, { Component } from 'react'

export default class Contact extends Component {

    state = {
        toggleContact: false
      };


    render() {
        return (
            <div className='row'>
                <div className='col s6'>
                <div className='card'>
                    <div className='card-content z-depth-3'>
                        <h6 className='card-title'>Bipon
                        <a href='#!' onClick={this.handleToggleContact}>
                        <i className='material-icons medium right'>
                          {this.state.toggleContact ? 'arrow_drop_up' : 'arrow_drop_down'}
                        </i>
                      </a>
                      <a href='#!'>
                        <i className='material-icons right'>delete</i>
                      </a>
                      <a href='#!' >
                        <i className='material-icons right'>edit</i>
                      </a>
                        </h6>
                        <ul>
                            <li>bipon@gmail.com</li>
                            <li>Frontend Dev.</li>
                        </ul>
                    </div>
              </div>
                </div>
                <div className='col s6'>
                    Single contact
                </div>
            </div>
        )
    }
}
