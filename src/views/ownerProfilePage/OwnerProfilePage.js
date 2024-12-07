import React from 'react'
import OwnerProfile from './OwnerProfile'
import OwnerPost from './OwnerPost'
import ImpressiveStory from './ImpressiveStory'

class OwnerProfilePage extends React.Component {

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
            <div className="OwnerProfilePage"
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    height: '100vh',
                    width: '100%',
                }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'                    
                }}>
                    <div style={{                   
                        width: '960px',
                        height: '260px',
                        borderBottom: '2px solid gray',
                    }}>
                        <OwnerProfile/>
                        <div style={{
                            display: 'flex',
                            marginLeft: '200px',
                            marginBottom: '20px',
                            gap: '20px'
                        }}>
                            <ImpressiveStory></ImpressiveStory>
                            <button style={{
                                cursor: 'pointer',
                                borderRadius: '50%',
                                padding: '0',
                                width: '50px',
                                height: '50px',
                                overflow: 'hidden',
                                border: 'none',
                                marginTop: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '20px',
                                alignItems: 'center',
                                background: 'gray'
                            }}>
                                +
                            </button>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        marginLeft: '210px',
                        marginRight: '210px',
                        flexWrap: 'wrap',
                        gap: '30px'
                    }}>
                        <OwnerPost></OwnerPost>
                        <OwnerPost></OwnerPost>
                        <OwnerPost></OwnerPost>
                        <OwnerPost></OwnerPost>
                        <OwnerPost></OwnerPost>
                        <OwnerPost></OwnerPost>
                    </div>
                </div>                  
            </div>
        )
    }
}

export default OwnerProfilePage;