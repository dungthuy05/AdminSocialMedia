import React from 'react';
import image2 from '../../assets/images/2.png';

class OwnerPost extends React.Component {
  state = {
    ownerPostButton: false,
  };

  handleOwnerPostButton = (event) => {
    this.setState({
      ownerPostButton: !this.state.ownerPostButton,
    });
  };

  render() {
    return (
      <button
        style={{
          cursor: 'pointer',
          marginTop: '50px',
          border: 'none',
          width: '200px',
          height: '200px',
          dislay: 'flex',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
        }}
      >
        <img
          src={image2}
          alt="owner post"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        ></img>
      </button>
    );
  }
}

export default OwnerPost;
