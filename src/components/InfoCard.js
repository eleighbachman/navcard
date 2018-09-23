import React, { Component } from 'react';

class InfoCard extends Component {

  renderTable = () => {
    const tableArr = this.props.content.content.table.tableElements;
    return tableArr.map((tableItem, index) => {
      return(
        <p key={index}><span>{tableItem.name}</span><span>{tableItem.value}</span></p>
      )
    })
  }

  render() {
    const { content } = this.props.content;
    return (
      <div className={this.props.activeClass}>
        <div className="banner">
          <h1>{content.banner}</h1>
          <p>{content.subBanner}</p>
        </div>
        <div className="table">
          <h2>{content.table.tableHeader}</h2>
          <div className="cardBody">
          {this.renderTable()}
          </div>
        </div>
      </div>
    )
  }
}

export default InfoCard;
