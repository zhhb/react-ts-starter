import * as React from 'react';
import Button from 'antd/es/button';
import './app.less';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;

// import * as React from 'react';

// class App extends React.Component<any, {}> {
//   render() {
//     return (<div>
//       <h1>Welcome to React with Typescript</h1>
//       <p>The color of this page is: {this.props.color}</p>
//     </div>
//     );
//   }
// }

// export default App;