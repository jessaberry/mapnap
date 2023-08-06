const TripExpViewer = ({
  trip,
  poi,
  getExperiences,
  handleAddExperience,
  handleDeleteExperience,
}) => {
  const getPOI = (poiID) => {
    const itemPOI = poi.find((item) => item.PointOfInterestId === poiID);
    return itemPOI ? itemPOI.Title : "N/A";
  };

  return (
    <div className="experience-list">
      <h4>Experiences</h4>
      <div>
        <button onClick={() => handleAddExperience(trip)}>
          Add An Experience
        </button>
      </div>
      <div className="experience-card-container">
        {getExperiences(trip.TripId).map((experience) => (
          <div className="experience-card" key={experience.ExperienceId}>
            <h5 className="experience-title">{experience.Title}</h5>
            <p>Cost: ${experience.Cost}</p>
            <p>Notes: {experience.Description}</p>
            <p>
              Location: {experience.StartingLocalDateTime}{" "}
              {getPOI(experience.StartingPointOfInterestId)}
            </p>
            <p>Public? {String(experience.IsPublic)}</p>
            {handleDeleteExperience !== null && (
              <button
                onClick={() => handleDeleteExperience(experience.ExperienceId)}
              >
                Delete Experience
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripExpViewer;
