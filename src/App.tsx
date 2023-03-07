import { createSignal } from 'solid-js';

import styles from './App.module.css';

const App = () => {

  const [myText, setMyText] = createSignal("")
  const msg = new SpeechSynthesisUtterance()
  
  const speechHandler = () => {
    msg.text = myText()
    window.speechSynthesis.speak(msg)
  }

  return (<>
    <div class={styles.App}>
  <div class="container text-center"></div>
    <div class="logo col-lg-5 col-md-6 col-sm-10 mx-auto my-4">
      My Text-To-Speech app
    </div>

    <div class="row">
      <div class="col-md-6 mx-auto">
        <form class="mb-5">
          <div class="form-group">
            <input
              type="text"
              value={myText()}
              placeholder="Please enter text here..."
              onChange={e => setMyText(e.currentTarget.value)}></input>
          </div>
          <button
            class="btn btn-light btn-lg btn-block"
            onClick={() => speechHandler()}>Speak!</button>
        </form>
      </div>
    </div>
  </div>
 </> );
};

export default App;
