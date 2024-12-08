import React from 'react';
import PhotoVideo from '../../assets/images/photo.png';
import NewPost from './NewPost';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      commentButton: false,
    };
  }

  handleShowPopup = () => {
    this.setState({ showPopup: true });
  };

  handleClosePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { showPopup } = this.state;

    return (
      <div>
        <form
          style={{
            width: '300px',
            flexShrink: 0,
            padding: '10px',
            borderRadius: '30px 10px',
            background: '#79b5b5',
            position: 'relative',
            height: '600px',
            boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            gap: '0',
          }}
        >
          <img
            src={PhotoVideo}
            alt="Photo/Video"
            style={{
              width: '40px',
              height: '40px',
              flexShrink: 1,
              borderRadius: '50px 0px 0px 50px',
            }}
          />
          <textarea
            type="text"
            style={{
              color: '#000',
              width: '400px',
              height: '20px',
              flexShrink: 1,
              borderRadius: '30px',
              background: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'left',
              resize: 'none',
              padding: '10px',
              flexWrap: 'wrap',
              scrollbarWidth: 'none',
            }}
          />
        </form>
        {/* Đưa component NewPost vào đây để hiển thị popup */}
        <NewPost show={showPopup} handleClose={this.handleClosePopup} />
      </div>
    );
  }
}

export default Comment;
