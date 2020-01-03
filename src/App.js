import React from 'react';



class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1}));
    //*** 겁나 중요함
    // 매순간 setState를 호출할 때 마다
    // react는 새로운 state와 함께 render function을 호출함!!!
  };
  minus = () => {
    this.setState({count: this.state.count - 1}); //이것보다는 위에 있는 것이 더 좋다. 이유는 최대한 외부의 접촉? 외부에 의지? 하지않게 하기 위함이다.
  };

  render(){ //원래 있는 함수임
    return <div>
       <h1>The number is: {this.state.count}</h1>
       <button onClick={this.add}>Add</button>
       <button onClick={this.minus}>Minus</button>
    </div>
   }
}

export default App;
