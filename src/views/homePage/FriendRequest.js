import React from 'react';
import image2 from '../../assets/images/2.png';
import PhotoVideo from '../../assets/images/photo.png';

class FriendRequest extends React.Component {

    state = {
        friendRequestButton: true,
        hide: false
    }

    handleFriendRequestButton = (event) => {
        this.setState ({
            friendRequestButton: !this.state.friendRequestButton
        })
    }

    render() {
        return (
            <button style={{
                cursor: 'pointer',
                border: 'none',
                width: '300px',
                height: '60px',
                display: 'flex',  
                justifyContent: 'flex-start',  
                alignItems: 'center',  
                // paddingBottom: '10px',
                padding: '0px',
                background: 'none', 
                borderBottom: '2px solid gray',  
                marginLeft: '0px',
                color: '#000',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '15px',  
                fontSize: '20px',
            }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}  // Khi rê chuột vào
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}       // Khi rê chuột ra ngoài
            >
                <img src={image2}
                    style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'cover',
                        borderRadius: '50%', 
                        marginRight: '10px',  
                    }}
                />
                Thùy Dung
            </button>
        )
    }
}

export default FriendRequest;
