import React from 'react';
import image2 from '../../assets/images/2.png';
import PhotoVideo from '../../assets/images/photo.png';


const Popup = ({ handleClose, show }) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";

    return (
        <div className={showHideClassName}>
            <div className="popup-main"
                style={{
                    width: '600px',
                    height: '400px',
                    justifyContent: 'center',
                    background: '#313131',
                }}
                >
                <div style={{
                    display: 'flex',
                }}>
                    <label style={{  
                        background: 'none',
                        border: 'none',
                        color: '#FFF',
                        fontFamily: 'Akshar',
                        fontSize: '22px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        width: '100%',                        
                        }}>
                        New status
                    </label>
                    <button onClick={handleClose}
                        style={{
                            cursor: 'pointer',
                            borderRadius: '30px',
                            width: '25px',
                            height: '25px',
                            border: '0px solid',
                            background: '#2196F3',
                            color: '#FFFFFF',
                            marginRight: '10px',
                        }}>x
                    </button>
                </div>
                
                <div style={{
                    width: '580px',
                    height: '1px',
                    background: 'none',
                    borderBottom: '1px solid gray',
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '10px',
                }}>
                </div>
                <form style={{
                    width: '590px',
                    height: '300px',
                    flexShrink: 0,
                    borderRadius: '30px 10px',
                    background: 'none',  
                    position: 'relative', 
                    marginTop: '10px', 
                    marginBottom: '10px',           
                }}>
                    <span style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginTop: '10px',
                        marginBottom: '10px',
                        marginLeft: '10px',
                    }}>
                        <img 
                            src={image2}  
                            alt="Post image" 
                            style={{ 
                                width: '40px',
                                height: '40px',
                                flexShrink: 1,
                                borderRadius: '30px',
                            }}
                        />
                        <textarea 
                            type='text'
                            placeholder="What's on your mind?"
                            style={{
                                width: '580px',
                                height: '280px',
                                color: '#FFF',                           
                                flexShrink: 1,
                                alignItems: 'flex-start',
                                verticalAlign: 'top',
                                textAlign: 'left',
                                background: '#5c5c5c',  
                                borderRadius: '0px 30px', 
                                resize: 'none',
                                padding: '10px'
                                // flexWrap: 'wrap',                         
                            }}
                        />                    
                    </span>
                    <div style={{
                        display: 'flex',
                        marginTop: '10px',
                        marginBottom: '10px',
                        marginLeft: '10px',
                        gap: '430px',
                        marginRight: '10px',
                    }}>
                        <button style={{
                            cursor: 'pointer',
                            display: 'flex',
                            color: '#FFF',
                            borderRadius: '10px',
                            alignItems: 'center', 
                            width: '100px',
                            height: '30px',
                            justifyContent: 'center',
                            flexShrink: 0,
                            background: '#979797',
                        }}>
                            <img 
                                src={PhotoVideo}  
                                alt="Photo/Video" 
                                style={{ 
                                    width: '20px',
                                    height: '20px',
                                    flexShrink: 1,
                                    borderRadius: '30px',
                                }}
                            />
                            Photo/Video
                        </button>
                        <button 
                        type="button"
                        onClick={handleClose}
                        style={{
                            cursor: 'pointer',
                            color: 'White',
                            borderRadius: '50px',
                            width: '50px',
                            height: '30px',
                            alignItems: 'center', 
                            justifyContent: 'center',
                            flexShrink: 0,
                            background: '#2196F3',
                        }}
                        // onClick={this.handleShowPopup} // Gọi hàm mở popup
                        >
                            Post
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Popup;