import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showFormData } from '../actions';

class AddCard extends Component {

  handleFormSet = (form) => {
    this.props.showFormData(form);
  }

  render() {
    const { header, subheader, icon, button } = this.props.content.content;

    return (
      <div className={this.props.activeClass}>
        <div className="addActionBody">
          <h1><i className={icon} /></h1>
          <h1>{header}</h1>
          <p>{subheader}</p>
          <span className="actionButton" onClick={() => this.handleFormSet(this.props.content)}><i className={button.icon} /></span>
          <p className="buttonClass">{button.class.toUpperCase()}</p>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showFormData: showFormData
  },dispatch)
}

export default connect(null, mapDispatchToProps)(AddCard);
