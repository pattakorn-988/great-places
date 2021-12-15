import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { init } from './helpers/db'

init().then(() => {
    console.log('Initializing database success')
}).catch((error) => {
    console.log('Database initialization failed.')
    console.log(error)
})

import PlacesNavigator from "./navigation/PlacesNavigator";
import placesReducer from './store/places-reducer'

const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
