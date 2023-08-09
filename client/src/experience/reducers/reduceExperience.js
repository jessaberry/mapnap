import {createSlice} from "@reduxjs/toolkit";
import {
    getExperiencesAsync,
    addExperienceAsync,
    deleteExperienceAsync,
    updateExperienceAsync,
    getExperiencesByUserIdAsync,
    getExperiencesByTripIdAsync
} from "./thunksExperience";
import {REQUEST_STATE, INITIAL_STATE} from "./stateExperience";

export const expSlice = createSlice({
    name: "exp",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getExperiencesAsync.fulfilled, (state, action) => {
            state.getExperiences = REQUEST_STATE.FULFILLED;
            state.experiences = action.payload;
        });

        builder.addCase(getExperiencesByUserIdAsync.fulfilled, (state, action) => {
            state.getExperiencesByUserId = REQUEST_STATE.FULFILLED;
            state.experiences = action.payload;
        });

        builder.addCase(getExperiencesByTripIdAsync.fulfilled, (state, action) => {
            state.getExperiencesByTripId = REQUEST_STATE.FULFILLED;
            state.experiences = action.payload;
        });

        builder.addCase(addExperienceAsync.fulfilled, (state, action) => {
            state.addExperience = REQUEST_STATE.FULFILLED;
            state.experiences.push(action.payload);
        });
        builder.addCase(addExperienceAsync.pending, (state, action) => {
            state.addExperience = REQUEST_STATE.PENDING;
            state.error = null;
        });
        builder.addCase(addExperienceAsync.rejected, (state, action) => {
            state.addExperience = REQUEST_STATE.REJECTED;
            state.error = action.error;
        });

        builder.addCase(getExperiencesByTripIdAsync.pending, (state, action) => {
            state.getExperiencesByTripId = REQUEST_STATE.PENDING;
            state.experiences = action.payload;
        });

        builder.addCase(deleteExperienceAsync.fulfilled, (state, action) => {
            state.deleteExperience = REQUEST_STATE.FULFILLED;
            state.experiences = state.experiences.filter(
                (experience) => experience.ExperienceId !== experience.payload
            );
        });
        builder.addCase(deleteExperienceAsync.pending, (state, action) => {
            state.deleteExperience = REQUEST_STATE.PENDING;
            state.error = null;
        });
        builder.addCase(deleteExperienceAsync.rejected, (state, action) => {
            state.deleteExperience = REQUEST_STATE.REJECTED;
            state.error = action.error;
        });

        builder.addCase(updateExperienceAsync.fulfilled, (state, action) => {
            state.updateExperience = REQUEST_STATE.FULFILLED;
            state.experiences = state.experiences.map((experience) =>
                experience.ExperienceId === action.payload.ExperienceId
                    ? action.payload
                    : experience
            );
        });
        builder.addCase(updateExperienceAsync.pending, (state, action) => {
            state.updateExperience = REQUEST_STATE.PENDING;
            state.error = null;
        });
        builder.addCase(updateExperienceAsync.rejected, (state, action) => {
            state.updateExperience = REQUEST_STATE.REJECTED;
            state.error = action.error;
        });
    },
});


export const {addExperience, deleteExperience, updateExperience} =
    expSlice.actions;
export default expSlice.reducer;
