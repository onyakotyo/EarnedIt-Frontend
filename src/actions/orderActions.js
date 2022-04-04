import { ORDER_PAYOUT_FAIL, ORDER_PAYOUT_SUCCESS, ORDER_PAYOUT_REQUEST, SAVE_COLLECTION_METHOD, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL,ORDER_SAVE_SEND_COUNTRY, ORDER_AMOUNT, SAVE_RECIPIENT_ADDRESS, SAVE_PAYMENT_METHOD, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_MY_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL } from '../constants/orderConstants'
import axios from 'axios'
//import { CART_CLEAR_ITEMS } from '../constants/cartConstants'
import { logout } from './userActions'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/orders/order`, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
    // dispatch({
    //   type: CART_CLEAR_ITEMS,
    //   payload: data,
    // })
    localStorage.removeItem('sendAmount')
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    })
  }
}


export const saveSendCountry = (value) => (dispatch) => {
    console.log('Back', value)
   
  dispatch({
    type: ORDER_SAVE_SEND_COUNTRY,
    payload: value
  })

  localStorage.setItem('sendCountry', JSON.stringify(value))
}




export const saveSendAmount = (value) => (dispatch) =>  {
    console.log('Back Amount', value)

   
  dispatch({
    type: ORDER_AMOUNT,
    payload: value
  })

  localStorage.setItem('sendAmount', JSON.stringify(value))
}

export const saveRecipientAddress = (data) => (dispatch) => {
  dispatch({
    type: SAVE_RECIPIENT_ADDRESS,
    payload: data,
  })

  localStorage.setItem('recipientAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))

}

 
export const saveCollectionMethod = (value) => (dispatch) => {

      console.log('Back Collection', value)


  dispatch({
    type: SAVE_COLLECTION_METHOD,
    payload: value
  })

  localStorage.setItem('collectionMethod', JSON.stringify(value))

}


export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/myorders`, config)

    dispatch({
      type: ORDER_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: message,
    })
  }
}

export const listOrders = () => async (dispatch, getState) => {
 
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders`, config)

    console.log('ALL Orders Data',data)

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: message,
    })
  }
}


export const payOutOrder = (orderId, payOutResult) => async (dispatch, getState) => {

    console.log('ORDER1', orderId)
    console.log('ORDER2', payOutResult)

  try {
    dispatch({
      type: ORDER_PAYOUT_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

 

    const { data } = await axios.put(`/api/orders/${orderId}/payout`, payOutResult, config)

    console.log('ORDER3', data)

    console.log('ORDER4', payOutResult)

    dispatch({
      type: ORDER_PAYOUT_SUCCESS,
      payload: data,
    })
    
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: ORDER_PAYOUT_FAIL,
      payload: message,
    })
  }
}


// export const removeFromCart = (id) => (dispatch, getState) => {
//   dispatch({
//     type: CART_REMOVE_ITEM,
//     payload: id,
//   })

 // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
//}



// export const saveSendCountry  = (value) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     dispatch({
//       type: ORDER_SAVE_SEND_COUNTRY,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.post(
//       '/api/orders/order',
//       value,
//       config
//     )

//     dispatch({
//       type: ORDER_SAVE_SEND_COUNTRY,
//       payload: data,
//     })

//     localStorage.setItem('sendCountry', JSON.stringify(data))

//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     // dispatch({
//     //   type: ORDER_PAY_FAIL,
//     //   payload: message,
//     // })
//   }
// }


