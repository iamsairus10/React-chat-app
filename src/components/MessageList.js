import React from 'react'


const Dummy_data = [
    {
        senderId : 'Sam',
        text: 'Hey, how is it going?'
    },
    {
        senderId : 'Me',
        text: 'I am fine...'
    },
    {
        senderId : 'Sam',
        text: 'I am going to school...'
    }
]



class MessageList extends React.Component{
    render() {
        return (
            <div id='messages-list'>
                <h1 id="heading">Messages</h1>
                <div>
                    {Dummy_data.map((message,index) => {
                        return (
                            <div>
                                <div class ="sender">{message.senderId}</div>
                                <div class="bubble">{message.text}</div>
                            </div>
                        )
                    })}
                </div>


            </div>




        );

    }

}

export default MessageList