import React from 'react'


class SendMessage extends React.Component{
    render() {
        return (
            <div>
                <form id="new-message" >
                <input id="input-box" type="text" placeholder="Type a message"  />
                    <button id="send-button" type="button" >
                        SEND
                    </button>
                </form>
            </div>
            
            



        );

    }

}

export default SendMessage









