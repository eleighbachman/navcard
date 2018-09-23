import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveButton } from '../actions';



class Header extends Component {

  handleSet = (button, index) => {
    this.props.setActiveButton(button, index);
  }
  renderHeaderButtons = () => {
    const buttonNames = this.props.buttons.map((button) => {
      return button.name
    })
    return buttonNames.map((button, index) => {
      if (button === this.props.activeButton) {
        return (
          <div className="headerButton active" key={index} onClick={() => this.handleSet(button, index)}>
          <span><i className={this.props.buttons[index].icon} /></span><span>{button}</span>
          </div>
        )
      } else {
      return (
        <div className="headerButton" key={index} onClick={() => this.handleSet(button, index)}>
        <span>
          <i className={this.props.buttons[index].icon} />
        </span>
        <span>
          {button}
        </span>
        </div>
      )
      }
    })
  }

  render() {
    return (
      <div className="Header">
        {this.renderHeaderButtons()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setActiveButton: setActiveButton
  },dispatch)
}

function mapStateToProps(state) {
  return {
    buttons: state.buttons,
    activeButton: state.activeButton
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
