import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const { URLShortener } = require('./components/URLShortener');
const { FileUploader } = require('./components/FileUploader');
const { Main } = require('./components/Main');

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <h1>Front-End to interact with Microservices</h1>
        <Switch>
          <Route exact path="/">
            <FileUploader className="App-section"/>
          </Route>
          <Route exact path="/p">
            <Main className="Main"/>
          </Route>
          <Route exact path="/short">
            <URLShortener className="App-section"/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
