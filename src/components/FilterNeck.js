import React from 'react';

export class FilterNeck extends React.Component {
  render() {
    return (
      <div className="row neck neck-filter">
        <div className="btn-group">
        <button type='button' value='0' className='btn btn-sm btn-default'>All</button>
          <button type='button' value='1' className='btn btn-sm btn-default'>1 - 4</button>
          <button type='button' value='2' className='btn btn-sm btn-default'>5 - 8</button>
          <button type='button' value='3' className='btn btn-sm btn-default'>9 - 12</button>
        </div>
      </div>
    )
  }
}