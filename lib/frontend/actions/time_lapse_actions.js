export const UPDATE_TIME_LAPSE = 'UPDATE_TIME_LAPSE';


export const updateTimeLapse = (timeLapse) => {
  return {
    type: UPDATE_TIME_LAPSE,
    timeLapse: {factor: timeLapse}
  }
}
