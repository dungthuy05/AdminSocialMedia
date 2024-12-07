import React from 'react';
import totalUser from '../../assets/images/totalUser.png';
import totalPost from '../../assets/images/totalPost.png';
import totalDeleteUser from '../../assets/images/totalDeleteUser.png';
import totalDeletePost from '../../assets/images/totalDeletePost.png';

class Dashboard extends React.Component {

    state = {
        dashboard: false
    }

    handleDashboard = (event) => {
        this.setState ({
            dashboard: !this.state.dashboard
        })
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: '20px',
                // background: 'gray'
            }}>
                <lable style={{
                    background: 'none',
                    border: 'none',
                    color: '#000',
                    fontFamily: 'Akshar',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    marginBottom: '10px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    Dashboard
                </lable>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '50px',
                    // borderRadius: '15px',
                    // cursor: 'pointer',
                }}>
                    {/* totalUser */}
                    <form style={{
                        background: '#FFF',
                        width: '250px',
                        height: '120px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
                            gap: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            // borderRadius: '5px',
                            // cursor: 'pointer',
                        }}>
                            <div>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal',
                                }}>Total Users</text><br/>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '30px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    letterSpacing: '1px',
                                }}>50,689</text>
                            </div>
                            <img 
                                src={totalUser}  
                                alt="total User" 
                                style={{ 
                                    width: '50px',
                                    height: '50px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>
                    
                    {/* totalPost */}
                    <form style={{
                        background: '#FFF',
                        width: '250px',
                        height: '120px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            // borderRadius: '5px',
                            // cursor: 'pointer',
                        }}>
                            <div>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal',
                                }}>Total Posts</text><br/>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '28px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    letterSpacing: '1px',
                                }}>10,293</text>
                            </div>
                            <img 
                                src={totalPost}  
                                alt="total User" 
                                style={{ 
                                    width: '50px',
                                    height: '50px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>

                    {/* totalDeleteUser */}
                    <form style={{
                        background: '#FFF',
                        width: '250px',
                        height: '120px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            // borderRadius: '5px',
                            // cursor: 'pointer',
                        }}>
                            <div>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal',
                                }}>Deleted User</text><br/>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '28px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    letterSpacing: '1px',
                                }}>50,689</text>
                            </div>
                            <img 
                                src={totalDeleteUser}  
                                alt="total User" 
                                style={{ 
                                    width: '50px',
                                    height: '50px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>

                    {/* totalDeletePost */}
                    <form style={{
                        background: '#FFF',
                        width: '250px',
                        height: '120px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
                            marginLeft: '10px',
                            marginRight: '10px',
                            // borderRadius: '5px',
                            // cursor: 'pointer',
                        }}>
                            <div>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal',
                                }}>Deleted Post</text><br/>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '28px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    letterSpacing: '1px',
                                }}>10293</text>
                            </div>
                            <img 
                                src={totalDeletePost}  
                                alt="total User" 
                                style={{ 
                                    width: '50px',
                                    height: '50px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Dashboard;