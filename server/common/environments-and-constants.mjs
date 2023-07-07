import dotenv from 'dotenv-flow';
export const config = dotenv.config({path: './server'});

/* Routes */
export const usersCollectionName = "users";
export const tripsCollectionName = "trips";
export const experiencesCollectionName = "experiences";
export const memoriesCollectionName = "memories";
export const mediaFilesCollectionName = "media-files";
export const pointsOfInterestCollectionName = "points-of-interest";
export const expensesCollectionName = "expenses";
