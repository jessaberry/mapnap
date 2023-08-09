export const REQUEST_STATE = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

export const INITIAL_STATE = {
    experiences: [],
    expenses: [],
    getExperiences: REQUEST_STATE.IDLE,
    getExperiencesByUserId: REQUEST_STATE.IDLE,
    getExperiencesByTripId: REQUEST_STATE.IDLE,
    addExperience: REQUEST_STATE.IDLE,
    deleteExperience: REQUEST_STATE.IDLE,
    updateExperience: REQUEST_STATE.IDLE,
    error: null,
};

export const actions = {
    GET_EXP: "exp/getExp",
    GET_EXP_BY_USER_ID: "ex/getExpByUserId",
    GET_EXP_BY_TRIP_ID: "ex/getExpByTripId",
    ADD_EXP: "exp/addExp",
    DELETE_EXP: "exp/deleteExp",
    UPDATE_EXP: "exp/updateExp",
};
