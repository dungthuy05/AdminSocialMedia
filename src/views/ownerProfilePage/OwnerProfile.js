import React from 'react';
import image2 from '../../assets/images/2.png';

class OwnerProfile extends React.Component {
  state = {
    ownerProfileButton: false,
  };

  handleOwnerProfileButton = (event) => {
    this.setState({
      ownerProfileButton: !this.state.ownerProfileButton,
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          gap: '50px',
        }}
      >
        <img
          src={image2}
          alt="profile"
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            marginLeft: '200px',
            marginTop: '50px',
            objectFit: 'cover',
          }}
        ></img>
        <div
          style={{
            color: '#000',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '15px',
            marginTop: '50px',
          }}
        >
          <label style={{ fontSize: '25px', display: 'block' }}>UserName</label>
          <br></br>
          <label style={{ fontSize: '20px', display: 'block' }}>5 posts</label>
          <br></br>
          <label style={{ fontSize: '20px', display: 'block' }}>24 friends</label>
          <br></br>
          <label style={{ fontSize: '20px', display: 'block' }}>Id user</label>
        </div>
      </div>
    );
  }
}

export default OwnerProfile;
