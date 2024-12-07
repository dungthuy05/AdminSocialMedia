import React from 'react'
import ToolBar from '../example/ToolBar'
import image2 from '../../assets/images/2.png'
import OwnerProfile from '../ownerProfilePage/OwnerProfile'
import OwnerPost from '../ownerProfilePage/OwnerPost'
import ImpressiveStory from '../ownerProfilePage/ImpressiveStory'
import FriendRequestList from '../homePage/FriendRequestList'

class AddFriendPage extends React.Component {

    state = {
        toolBarButton: false
    }

    handleToolBarButton = (event) => {
        this.setState ({
            toolBarButton: !this.state.toolBarButton
        })
    }

    render() {
        return (
            <div className="AddFriendPage"
                style={{
                    display:'flex',
                    justifyContent: 'center',
                    height: '100vh',
                    width: '100%',
                }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    
                    <div style={{                   
                        width: '960px',
                        height: '260px',
                        borderBottom: '2px solid gray',
                    }}>
                        <div style={{
                                display: 'flex',
                            }}>
                            <OwnerProfile/>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '200px',
                                // width: '100%',
                            }}>
                                    <button style={{
                                        color: '#FFF',
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '30px', 
                                        fontSize: '15px',                
                                        marginTop: '50px', 
                                        background: 'gray',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                    }}>
                                        Add friend
                                    </button>
                                    <button style={{
                                        color: '#FFF',
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '30px', 
                                        fontSize: '15px',                                          
                                        marginTop: '10px', 
                                        background: 'gray',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                    }}>
                                        Report
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        marginLeft: '210px',
                        marginRight: '210px',
                        flexWrap: 'wrap',
                        gap: '30px',
                        color: 'white',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '30px',
                        height: '100%',
                        alignItems: 'center', 
                        justifyContent: 'center',
                    }}>
                        Add friend to see posts!
                    </div>
                </div>    
                <FriendRequestList></FriendRequestList>              
            </div>
        )
    }
}

export default AddFriendPage;