import MessageList from './components/MessageList'
import './App.css';
import Contacts from './components/Contacts'
import SendMessage from './components/Sendmesgg'
function App() {
  return (
    <div id="container">
      <Contacts/>
      <section id="main">
        <MessageList/>
        <SendMessage/>
      </section>
      
    </div>
  );
}

export default App;
