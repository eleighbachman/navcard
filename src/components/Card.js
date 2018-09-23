import React, { Component } from 'react';
import AddCard from './AddCard';
import InfoCard from './InfoCard';
import Form from './Form';
import { connect } from 'react-redux';

class Card extends Component {

  render() {
    return (
      <div className="card">
      { this.props.activeClass === "information" ?
      <InfoCard activeClass={this.props.activeClass} content={this.props.activeContent} /> :

      (this.props.activeClass === "addContent" ?
      <AddCard activeClass={this.props.activeClass} content={this.props.activeContent} />
      : <Form /> )

      

      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeContent: state.activeContent,
    activeClass: state.activeClass
  }
}

export default connect(mapStateToProps)(Card);
