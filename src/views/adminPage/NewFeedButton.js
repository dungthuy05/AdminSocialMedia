import React from 'react';
import image2 from '../../assets/images/2.png';

class NewFeedButton extends React.Component {

    state = {
        newFeedButton: false
    }

    handleNewFeedButton = (event) => {
        this.setState ({
            newFeedButton: !this.state.newFeedButton
        })
    }

    render() {
        let {newFeedButton} = this.state;
        let checkNewFeedButton = newFeedButton === true? 'newFeedButton = true' : 'newFeedButton = false';
        return (
            <>
                {newFeedButton === false ?
                    <div>
                        <button 
                            style={{
                                flexShrink: 1,
                                display: 'inline-flex',
                                cursor: 'pointer',
                                padding: '10px',
                                alignItems: 'center',
                                width: '180px',
                                height: '50px',
                                gap: '10px',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.00)',
                                background: 'rgba(255, 255, 255, 0.20)',
                                color: '#FFF',
                                fontFamily: 'Akshar',
                                fontSize: '22px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                                }} 
                            onClick={() => this.handleNewFeedButton()}>
                            <img 
                                src={image2} 
                                alt="Home icon" 
                                style={{ width: '20px', height: '20px'}}
                            />
                                New Feeds
                        </button>
                    </div>
                    :
                    <>
                        <div>
                            <NewFeedButton/>                    
                        </div>
                    </>   
                }
            </>
        )
    }
}
export default NewFeedButton;