class Input extends React.Component {
  constructor() {
    super();
    this.state = {userInput: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Russell Chang](https://russelltchang.github.io/)*'};
    this.handleChange = this.handleChange.bind(this);
  }

  //need callback
  handleChange(e) {
    this.setState({userInput: e.target.value}, ()=>{
      console.log(this.state.userInput);
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center"><b>Markdown Previewer</b></h1>
        <div className="text-center">
          <textarea id="textInput" defaultValue={this.state.userInput} onChange={this.handleChange}/>
          <div id="textOutput" dangerouslySetInnerHTML={{__html: marked(this.state.userInput)}}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Input />,
  document.getElementById('root')
);