import React from 'react';
// import './Grid.css'

class Square extends React.Component {

  render() {
    const {value} = this.props
    return (
      <div margin="">
          <button className="square">{value}</button>
        </div>
    );
  }
}

export default Square;