import counter from './counter'
import userInfo from './userInfo'
export default function combineReducers(state={}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action)
  }
}