## Project with the purpose of studying the RN and Redux.

Run command: `npm install --save redux react-redux`;

> Reducer are allways call with 2 arguments, the curent state and the action:

```
const reducer = (state = [ ], action) => {
  if(action.type === 'split_string') {
    return action.payload.split('');
  } else if(action.type === 'add_caracter') {
    return [ ...state, action.payload ];
  }
  return state;
};
```

> When create a Redux store it is necessary to pass an argument the reducer.

```
const store = Redux.createStore(reducer);

store.getState(); // shows empty array [ ]

const action = {
  type: 'split_string',  //always will be a string
  payload: 'asdf'        //data that we will manipulate
};

const acrion2 = {
  type: 'add_caracter',
  payload: 'a'
};

store.dispach(action); // {"type: "split_string", "payload": "asdf"}

store.getState(); // shows ["a","s","d","f"]
`>`
