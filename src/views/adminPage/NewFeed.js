import React from 'react';
import Post from '../homePage/Post';
import Comment from '../homePage/Comment';

class NewFeed extends React.Component {
  state = {
    toolBarButton: false,
    showComment: false,
  };

  handleToolBarButton = (event) => {
    this.setState({
      toolBarButton: !this.state.toolBarButton,
    });
  };
  handleCommentToggle = () => {
    this.setState((prevState) => ({
      showComment: !prevState.showComment,
    }));
  };

  render() {
    return (
      <>
        <div
          className="NewFeed"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexGrow: 1,
              width: '100%',
              marginTop: '30px',
              marginBottom: '30px',
              gap: '30px',
            }}
          >
            <Post onCommentClick={this.handleCommentToggle}></Post>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              // height: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                // width: '20%',
                marginTop: '30px',
                marginBottom: '30px',
                marginRight: '30px',
                gap: '30px',
                height: '640',
                overflowY: 'auto',
              }}
            >
              <Comment />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                // width: '20%',
                marginTop: '30px',
                marginBottom: '30px',
                marginRight: '30px',
                gap: '30px',
                height: '60%',
                overflowY: 'auto',
              }}
            >
              <form
                style={{
                  width: '300px',
                  height: '50px',
                  flexShrink: 0,
                  padding: '10px',
                  borderRadius: '30px 10px',
                  display: 'flex',
                  gap: '0',
                  border: 'none',
                  color: '#FFF',
                  fontFamily: 'Akshar',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                  background: '#79b5b5',
                }}
              >
                <label>This post has 140 reports and report rate is 80%</label>
              </form>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                marginRight: '30px',
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
                  height: '50px', // Đặt chiều cao cố định
                  flex: 1, // Sử dụng flex để button tự động điều chỉnh chiều rộng
                  marginRight: '10px', // Thêm khoảng cách giữa hai button
                  cursor: 'pointer',
                  borderRadius: '30px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#79b5b5',
                }}
              >
                Remove post
              </button>
              <button
                style={{
                  color: '#FFF',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '30px',
                  fontSize: '15px',
                  height: '50px', // Đặt chiều cao cố định
                  flex: 1, // Sử dụng flex để button tự động điều chỉnh chiều rộng
                  cursor: 'pointer',
                  borderRadius: '30px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#79b5b5',
                }}
              >
                Remove report
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewFeed;
