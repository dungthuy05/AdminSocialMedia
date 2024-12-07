import React from 'react';
import totalUser from '../../assets/images/totalUser.png';
import totalPost from '../../assets/images/totalPost.png';

class Contribution extends React.Component {

    state = {
        contribution: false
    }

    handleContribution = (event) => {
        this.setState ({
            contribution: !this.state.contribution
        })
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '420px',
                height: '400px',
                padding: '20px',
                // background: 'blue',
                
                // borderRadius: '15px',
                // cursor: 'pointer',
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
                    Contribution
                </lable>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '20px',
                    marginBottom: '20px',

                }}>
                    {/* Pending */}
                    <form style={{
                        background: '#FFF',
                        width: '200px',
                        height: '100px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
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
                                }}>Handled Users</text><br/>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '28px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    letterSpacing: '1px',
                                }}>40,689</text>
                            </div>
                            <img 
                                src={totalUser}  
                                alt="total User" 
                                style={{ 
                                    width: '40px',
                                    height: '40px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>
                    
                    {/* totalPost */}
                    <form style={{
                        background: '#FFF',
                        width: '200px',
                        height: '100px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
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
                                }}>Handled Posts</text><br/>
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
                                    width: '40px',
                                    height: '40px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>
                </div>

                <div style={{
                    display: 'flex',
                    // alignItems: 'center',
                    justifyContent: 'flex-end',
                    // padding: '10px',
                    gap: '20px',
                    marginBottom: '20px',

                    // borderRadius: '15px',
                    // cursor: 'pointer',
                }}>
                    {/* totalUser */}
                    <form style={{
                        background: '#FFF',
                        width: '200px',
                        height: '100px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
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
                                }}>Deleted Users</text><br/>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '28px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    letterSpacing: '1px',
                                }}>40,689</text>
                            </div>
                            <img 
                                src={totalUser}  
                                alt="total User" 
                                style={{ 
                                    width: '40px',
                                    height: '40px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>
                    
                    {/* totalPost */}
                    <form style={{
                        background: '#FFF',
                        width: '200px',
                        height: '100px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
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
                                }}>Deleted Posts</text><br/>
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
                                    width: '40px',
                                    height: '40px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>
                </div>

                <div style={{
                    display: 'flex',
                    // alignItems: 'center',
                    justifyContent: 'flex-end',
                    // padding: '10px',
                    gap: '20px',
                    // borderRadius: '15px',
                    // cursor: 'pointer',
                }}>
                    {/* totalUser */}
                    <form style={{
                        background: '#FFF',
                        width: '200px',
                        height: '100px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
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
                                }}>Deleted User Rate</text><br/>
                                <text style={{
                                    color: '#202224',
                                    fontFamily: "Nunito Sans",
                                    fontSize: '28px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    letterSpacing: '1px',
                                }}>40,689</text>
                            </div>
                            <img 
                                src={totalUser}  
                                alt="total User" 
                                style={{ 
                                    width: '40px',
                                    height: '40px',
                                    flexShrink: 1,
                                    borderRadius: '10px',
                                }}
                            />
                        </div>
                    </form>
                    
                    {/* totalPost */}
                    <form style={{
                        background: '#FFF',
                        width: '200px',
                        height: '100px',
                        borderRadius: '15px',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
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
                                }}>Deleted Post Rate</text><br/>
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
                                    width: '40px',
                                    height: '40px',
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
export default Contribution;