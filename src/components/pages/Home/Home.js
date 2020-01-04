import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    const boardId = '12345';
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <Link className="btn btn-info" to="/board/new">Create new Board</Link>
        <Link className="btn btn-danger" to={`/board/${boardId}`}>Single Board</Link>
      </div>
    );
  }
}

export default Home;
