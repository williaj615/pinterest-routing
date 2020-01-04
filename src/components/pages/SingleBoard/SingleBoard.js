import React from 'react';
import './SingleBoard.scss';

class SingleBoard extends React.Component {
  render() {
    const { boardId } = this.props.match.params;
    return (
      <div className="SingleBoard">
        <h1>SingleBoard</h1>
        <div>Current board ID is {boardId}</div>
      </div>
    );
  }
}

export default SingleBoard;
