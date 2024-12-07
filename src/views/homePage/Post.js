import React from 'react';
import image2 from '../../assets/images/2.png';

class Post extends React.Component {

    state = {
        postButton: false
    }

    handlePostButton = (event) => {
        this.setState ({
            postButton: !this.state.postButton
        })
    }

    render() {
        return (
            <>
                    <form style={{
                        width: '480px',
                        height: '600px',
                        display: 'flex',
                        flexDirection: 'column',
                        flexShrink: 0,
                        borderRadius: '10px',
                        background: '#79b5b5',
                        padding: '10px', 
                        position: 'relative',
                        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)'
                    }}>
                        {/* Hình ảnh */}
                        <img 
                            src={image2}  
                            alt="Post image" 
                            style={{ 
                                width: '450px',
                                height: '480px',
                                flexShrink: 0,
                                borderRadius: '10px',
                                objectFit: 'cover', // giữ tỉ lệ hình ảnh
                                marginTop: '15px',
                                marginLeft: '15px',
                            }}
                        />
                        {/* Dòng caption */}
                        <label style={{
                            display: 'block',
                            color: '#FFF',
                            fontFamily: 'Akshar',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            textAlign: 'justify',
                            lineHeight: 'normal',
                            marginBottom: '10px',
                            marginLeft: '15px',
                            marginRight: '15px'
                        }}>
                            @thien.mih.mih22: thay Minh Tam sieu de thuong :3333333 à 🌦️° 🍓👨🏼‍🌾♡
                        </label>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between', 
                            position: 'absolute',
                            bottom: '20px', 
                            left: '25px', 
                            right: '25px'
                        }}>
                            <label style={{
                                display: 'block', 
                                color: '#FFF',
                                fontFamily: 'Akshar',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: 300,
                                lineHeight: 'normal',
                                opacity: '0.6',
                                marginTop: '30px', 
                            }}>
                                2 hours ago
                            </label>

                        </div>
                    </form>
            </>
        )
    }
}

export default Post;
