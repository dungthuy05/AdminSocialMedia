import React from 'react';
import image2 from '../../assets/images/2.png';

class PendPostButton extends React.Component {

    state = {
        pendPostButton: false
    }

    handlePendPostButton = (event) => {
        this.setState ({
            pendPostButton: !this.state.pendPostButton
        })
    }

    render() {
        let {pendPostButton} = this.state;
        let checkPendPostButton = pendPostButton === true? 'pendPostButton = true' : 'pendPostButton = false';
        return (
            <>
                {pendPostButton === false ?
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
                            onClick={() => this.handlePendPostButton()}>
                            <img 
                                src={image2} 
                                alt="Home icon" 
                                style={{ width: '20px', height: '20px'}}
                            />
                                Pending Post
                        </button>
                    </div>
                    :
                    <>
                        <div>
                            <PendPostButton/>                    
                        </div>
                    </>   
                }
            </>
        )
    }
}
export default PendPostButton;