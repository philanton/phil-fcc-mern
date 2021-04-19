const React = require('react');
const { FormControl, Button, InputGroup, Alert } = require('react-bootstrap');
const API = require('../utils/API');

export class URLShortener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalURL: "",
      shortURL: "",
      statusCode: 0
    }
  }
  handleChange = event => {
    this.setState({
      originalURL: event.target.value
    });
  };
  handleSubmit = event => {
    API.getShortener(this.state.originalURL)
                 .then(res => {
                   if(res.data.short_url) {
                     this.setState({
                       shortURL: res.data.short_url,
                       statusCode: 1
                     })
                   } else {
                     this.setState({
                       statusCode: -1
                     })
                   }
                 })
                 .catch(err => console.log(err));
  };
  render() {
    return (
      <div className={this.props.className}>
        <h2>URL Shortener</h2>
        <p>Here you can enter some long URL-address to get short one.</p>
        {this.state.shortURL && ( this.state.statusCode > 0 ? (
          <Alert variant="info">
            Wow! Keep an eye on this url:
            <Alert.Link href={this.state.shortURL}>
              {this.state.shortURL}
            </Alert.Link>
          </Alert>
        ) : (
          <Alert variant="warning">
            Sorry! Seems like this address is invalid...
          </Alert>
        )
        )}
        <InputGroup>
          <FormControl
            placeholder="http://www.example.com"
            value={this.state.originalURL}
            onChange={this.handleChange.bind(this)}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.handleSubmit.bind(this)}>Get short</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
