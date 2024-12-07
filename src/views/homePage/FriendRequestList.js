import React from 'react';
import FriendRequest from './FriendRequest';

class FriendRequestList extends React.Component {

    state = {
        FriendRequestListButton: true
    }

    handleFriendRequestListButton = (event) => {
        this.setState ({
            FriendRequestListButton: !this.state.FriendRequestListButton
        })
    }

    render() {
        let {FriendRequestListButton} = this.state;
        FriendRequestListButton = FriendRequestListButton === true? true : false;
        return (
            <>
            {FriendRequestListButton === true ?
                <div style={{
                    width: '300px'
                }}>
                    <button style={{
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        color: '#000',
                        fontFamily: 'Akshar',
                        fontSize: '22px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        padding: '0px',
                        marginBottom: '10px',
                        marginTop: '50px'
                        }}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}  // Khi rê chuột vào
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}       // Khi rê chuột ra ngoài
                        // onClick={() => this.handleFriendRequestListButton()}
                        >
                    Pending User List
                    </button>
                    <button style={{
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        color: '#000',
                        fontFamily: 'Akshar',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        padding: '0px',
                        marginBottom: '10px',
                        marginLeft: '90px',
                        }}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}  // Khi rê chuột vào
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}       // Khi rê chuột ra ngoài
                        onClick={() => this.handleFriendRequestListButton()}>
                            Hide
                    </button>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/>
                    <FriendRequest/> 
                </div>
                : 
                <button style={{
                    cursor: 'pointer',
                    marginTop: '50px',
                    background: 'none',
                    border: 'none',
                    color: '#000',
                    fontFamily: 'Akshar',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    padding: '0px',
                    marginBottom: '10px'
                    }}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}  // Khi rê chuột vào
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}       // Khi rê chuột ra ngoài
                    onClick={() => this.handleFriendRequestListButton()}>
                Pending User List
                </button>
                }
            </>
        )
    }
}

export default FriendRequestList;
