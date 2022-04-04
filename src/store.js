import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { orderPayoutReducer, orderListReducer, orderListMyReducer, orderReducer, orderCreateReducer } from './reducers/orderReducers'



const reducer = combineReducers({
    userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	order: orderReducer,
	orderCreate: orderCreateReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
	orderListMy: orderListMyReducer,
	orderList: orderListReducer,
	orderPayout: orderPayoutReducer
	
})

// RETREIVING USER FROM STORAGE
const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null


// RETREIVING USER FROM STORAGE
const sendCountryFromStorage = localStorage.getItem('sendCountry')
  ? JSON.parse(localStorage.getItem('sendCountry'))
  : {}

  // RETREIVING USER FROM STORAGE
const sendAmountFromStorage = localStorage.getItem('sendAmount')
  ? JSON.parse(localStorage.getItem('sendAmount'))
  : {}

  // RETREIVING USER FROM STORAGE
const recipientAddressFromStorage = localStorage.getItem('recipientAddress')
  ? JSON.parse(localStorage.getItem('recipientAddress'))
  : {}

   // RETREIVING USER FROM STORAGE
const collectionMethodFromStorage = localStorage.getItem('collectionMethod')
  ? JSON.parse(localStorage.getItem('collectionMethod'))
  : {}


// INITIAL STATE
const initialState = {
	order: {
		sendAmount: sendAmountFromStorage,
		sendCountry: sendCountryFromStorage,
		recipientAddress: recipientAddressFromStorage,
		collectionMethod: collectionMethodFromStorage

	},
	userLogin: {
		userInfo: userInfoFromStorage,
	},

}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store