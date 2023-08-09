import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./stateExperience";
import experienceManager from "./serviceExperience";

export const getExperiencesAsync = createAsyncThunk(
  actions.GET_EXP,
  async () => {
    return await experienceManager.getExperiences();
  }
);

export const getExperiencesByUserIdAsync = createAsyncThunk(
  actions.GET_EXP_BY_USER_ID,
  async () => {
    return await experienceManager.getExperiences();
  }
);

export const addExperienceAsync = createAsyncThunk(
  actions.ADD_EXP,
  async (exp) => {
    return await experienceManager.addExperience(exp);
  }
);

export const deleteExperienceAsync = createAsyncThunk(
  actions.DELETE_EXP,
  async (expID) => {
    return await experienceManager.deleteExperience(expID);
  }
);

export const updateExperienceAsync = createAsyncThunk(
  actions.UPDATE_EXP,
  async (exp) => {
    return await experienceManager.updateExperience(exp);
  }
);
