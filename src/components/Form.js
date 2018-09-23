import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      defaultButton: "Submit"
    }
  }

  handleSubmit = () => {
    console.log("submit button clicked");
    this.setState({
      defaultButton: <i className="fa fa-spinner fa-spin" />
    })
  }

  renderFormFields = () => {
    return this.props.activeClass.addForm.map((formItem, index) => {
      return (
      <input key={index} type={formItem.type}  placeholder={formItem.name} />)
    })
  }

  render() {
    return(
      <div className={this.props.activeClass.class}>
        <div className="formContainer">
          <h2>{this.props.activeClass.content.header}</h2>
          {this.renderFormFields()}
          <button onClick={() => this.handleSubmit()}>{this.state.defaultButton}</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeClass: state.activeClass
  }
}

export default connect(mapStateToProps)(Form);
