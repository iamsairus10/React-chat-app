import React from 'react'

const Dummy_data = [
    {
        senderId : 'Sam',
        text: 'Hey, how is it going?'
    },
    {
        senderId : 'Rahul',
        text: 'You there?'
    },
    {
        senderId : 'Vijay',
        text: 'Last night was lit!'
    }
]




class Contacts extends React.Component{
    render() {
        return (
            <aside id= "sidebar">
                <h1 id="heading">Contacts</h1>
                <div>
                    {Dummy_data.map((message,index) => {
                        return (
                            <div class="btn-group" >
                                <button class="contactId">
                                    <div class ="contact-name">{message.senderId}</div>
                                    <div class="contact-text">{message.text}</div>
                                </button>
                                
                                
                            </div>
                            
                            
                        )
                    })}
                </div>




            </aside>




        );

    }

}

export default Contacts