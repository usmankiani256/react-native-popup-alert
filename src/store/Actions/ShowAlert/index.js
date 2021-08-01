import { SHOW_ALERT_FAILURE, SHOW_ALERT_SUCCESS } from './type'

const showAlert = (state) => async (dispatch) => {
  try {
    const currentState = state
    dispatch({
      type: SHOW_ALERT_SUCCESS,
      payload: currentState,
      success: true,
    })
  } catch (err) {
    dispatch({
      type: SHOW_ALERT_FAILURE,
      payload: err.response || err.message || err,
      success: false,
    })
  }
}

export default showAlert
