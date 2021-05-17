import React,{ Component ,useState,useEffect,useRef,useContext,useCallback} from 'react';

function Example() {
  const [isCount,setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${isCount} times`;
  });
  return (
      <div>
        <p>You clicked {isCount} times</p>
        <button onClick={()=> setCount(isCount+1 )}>Click Me!</button>
      </div>
  )
}


function Testlist(props) {
  return <h1>hello,{props.name}</h1>
}

function Form() {
  const [text, updateText] = useState('');
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text; // 把它写入 ref
  });

  const handleSubmit = useCallback(() => {
    const currentText = textRef.current; // 从 ref 读取它
    alert(currentText);
  }, [textRef]); // 不要像 [text] 那样重新创建 handleSubmit

  return (
      <>
        <input value={text} onChange={e => updateText(e.target.value)} />
        <button onClick={handleSubmit}>ref</button>
      </>
  );
}


function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
  );
}

class AppList extends Component {
  constructor(props) {
    super(props);
    this.state={
      temperature:'',
      count:0,
      status:true,
      number:0
    };
  }
  add = ()=>{
    this.setState({number:this.state.number+1});
  };
  componentDidUpdate(){
    this.changeTitle();
  }
  changeTitle = ()=>{
    document.title = `你已经点击了${this.state.number}次`;
  };
  componentDidMount(){
    let p = new Promise((resolve,reject) => {
      console.log('1')
      resolve();
    })
    p.then(result => {
      console.log('5')
    })
    p.then(result => {
      console.log('4')
    })
    console.log('3')
    this.changeTitle();
  }

  handleChang =(e) => {
    this.setState({temperature:e.target.value})
  };

  render() {
    const temperature = this.state.temperature;
    const btnClick = () => this.setState({status:!this.state.status});
    const button = () => {
      return this.state.status?<button onClick={btnClick}>启用</button>: <button onClick={btnClick}>禁用</button>
    };
    const FanButton = React.forwardRef((props, ref) =>(
        <button ref={ref} className={"FanButton"}>
          test!
        </button>
    ));
    return(
        <div>
          <fieldset>
            <App></App>
            <>
              <td>hello world</td>
            </>
            <div>
              <p>点击{this.state.count}</p>
              <button onClick={()=>this.setState({count:this.state.count+1})}>点击+1</button>
              {button()}
            </div>
            <p>{this.state.number}</p>
            <button onClick={this.add}>+</button>
            <br/>
            <FanButton/>
            <Form/>
            <Example/>
            <TextInputWithFocusButton/>
            <br/>

          </fieldset>

        </div>
    )

  }

}

//简单实现增删改查
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      list:["a"],
      inputValue:'',
    }
  }


  handleItemClick =()=>{
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:'',

    })
  }

  handleItemChange = (e)=>{
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete = (index) =>{
    const list = this.state.list
    list.splice(index,1)
    this.setState(list)
  }

  render() {
    return (
        <div>
          <div>
            <input value={this.state.inputValue} onChange={(event) => this.handleItemChange(event)} />
            <button
                onClick={()=> this.handleItemClick()}
                style={{color:'bule'}}>
              click me
            </button>
          </div>
          <ul>
            {
              this.state.list.map((item,index) => {
                return  <li key={index} onClick={() => this.handleDelete(index)}>{item == 1 ? 'yes' :'no'}</li>
              })
            }
          </ul>
          <div>
            <Testlist name="Sala" />
          </div>
        </div>
    )
  }


}

export default AppList;
