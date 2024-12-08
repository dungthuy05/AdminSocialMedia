import React from 'react';
import OwnerProfile from '../ownerProfilePage/OwnerProfile';
import OwnerPost from '../ownerProfilePage/OwnerPost';
import FriendRequestList from '../homePage/FriendRequestList';

class AcceptFriendPage extends React.Component {
  state = {
    toolBarButton: false,
  };

  handleToolBarButton = (event) => {
    this.setState({
      toolBarButton: !this.state.toolBarButton,
    });
  };

  render() {
    return (
      <div
        className="AcceptFriendPage.js"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          gap: '20px',
        }}
      >
        <div>
          <div
            style={{
              width: '800px',
              height: '200px',
              borderBottom: '2px solid gray',
            }}
          >
            <div
              style={{
                display: 'flex',
              }}
            >
              <OwnerProfile />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '200px',
                  // width: '100%',
                }}
              >
                <button
                  style={{
                    color: '#FFF',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '30px',
                    fontSize: '15px',
                    marginTop: '50px',
                    background: '#FE5F55',
                    cursor: 'pointer',
                    borderRadius: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Ban user
                </button>
                <button
                  style={{
                    color: '#000',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '30px',
                    fontSize: '15px',
                    marginTop: '10px',
                    cursor: 'pointer',
                    borderRadius: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#EEF5DB',
                  }}
                >
                  Remove report
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              marginLeft: '210px',
              marginRight: '210px',
              flexWrap: 'wrap',
              gap: '30px',
            }}
          >
            <OwnerPost></OwnerPost>
            <OwnerPost></OwnerPost>
            <OwnerPost></OwnerPost>
            <OwnerPost></OwnerPost>
            <OwnerPost></OwnerPost>
            <OwnerPost></OwnerPost>
          </div>
        </div>
        <FriendRequestList></FriendRequestList>
      </div>
    );
  }
}

export default AcceptFriendPage;
