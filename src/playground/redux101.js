import { createStore} from 'redux';

const incrementCount = ({incrememtBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrememtBy
});

const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}= {}) => ({
    type: 'SET',
    count
});

const resestCount = () => ({
    type: 'RESET'
    
});

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
        
            return {
                count: state.count + action.incrememtBy
            }
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state;
    }
    return state;
});

store.subscribe(() =>{
    console.log(store.getState());
})



store.dispatch(incrementCount());

store.dispatch(incrementCount({incrememtBy: 5}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:0}));

store.dispatch(decrementCount());

store.dispatch(setCount({count:101}));

