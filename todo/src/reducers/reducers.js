import { ADD, REMOVE } from '../actions/actions';
//REDUCER REDUCER REDUCER REDUCER
// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
//REDUCER REDUCER REDUCER REDUCER
// const counter = (count = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//     // Fill in the body of this case
//     return (action.payload);
//     case DECREMENT:
//     // Fill in the body of this case
//     return (action.payload);
//     default:
//       return count;
//   }
// };
const reducer = (name = "", action) => {
    switch (action.type) {
        case ADD:
        // console.log('add')
        return [...name, ...action.todos.value]
        case REMOVE:
        // console.log('remove')
        // return []
        default:
        // console.log('default')
        return action.todos
        return name;
    }
}
export default reducer;