const initialTrip = {
  // TripId: 1,                                           handled by UUID generator
  // UserId: 1,                                           handled by login
  Title: "",
  Description: "",
  StartingPointOfInterestId: "",
  EndingPointOfInterestId: "",
  // StartingLocalDateTime: "2023-04-16T21:50:00.000Z",   handled by earliest experience's date/time
  // EndingDateTime: "2023-05-03T21:55:00.000Z",          handled by latest experience's date/time
  Countries: "",
  CoverMediaFileId: "",
  // IsPublic: true,                                      handled by visibility bar when sharing
  // CreatedAt: "2023-05-01T18:25:43.511Z",               handled by memories
  // UpdatedAt: "2023-05-01T18:25:43.511Z",               ditto
  // DeletedAt: null,                                     ditto
  // IsDeleted: false                                     ditto
};
export default initialTrip;
