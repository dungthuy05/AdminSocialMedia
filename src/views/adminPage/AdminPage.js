import React from 'react';
import Dashboard from './Dashboard'
import Contribution from './Contribution'

class HomePage extends React.Component {

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
            <div className="HomePage"
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    width: '100%',
                    height: '100vh',
                }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',                        
                        flexGrow: 1,
                        width: '75vw',
                        marginTop: '30px',
                        marginBottom: '30px',
                    }}>
                    <div>
                    <Dashboard></Dashboard>
                    </div>
                    <div style={{
                        display: 'flex',
                    }}></div>
                    <Contribution></Contribution>
                </div>
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        // width: '20%',
                        marginTop: '30px',
                        marginBottom: '30px',
                        marginRight: '30px',
                        gap: '30px',
                }}>
                    {/* <FriendRequestList/> */}
                </div>
                
            </div>     
        )
    }
}

export default HomePage;