var USER_DATA = {
    name: 'Spencer McKimson',
    username: 'SpencerMcKimson',
    image: 'https://avatars0.githubusercontent.com/u/6540658?v=3&u=350a007810c57378d0f0e0368fe033fa70f21fec&s=400'
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
    render: function() {
        return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    }
});

ReactDOM.render(
    <HelloWorld name="Spencer"/>,
    document.getElementById('app')
);