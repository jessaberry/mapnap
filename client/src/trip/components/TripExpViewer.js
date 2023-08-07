const TripExpViewer = ({
  trip,
  poi,
  getExperiences,
  handleAddExperience,
  handleDeleteExperience,
}) => {
  const getPOI = (poiID) => {
    const itemPOI = poi.find((item) => item.PointOfInterestId === poiID);
    return itemPOI ? "Location: " + itemPOI.Title : null;
  };
  const getDate = (date) => {
    return new Date(date);
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
              From {getDate(experience.StartingLocalDateTime).toLocaleString()}{" "}
            </p>
            <p>{getPOI(experience.StartingPointOfInterestId)}</p>
            <p>To {getDate(experience.EndingLocalDateTime).toLocaleString()}</p>
            <p>{getPOI(experience.EndingPointOfInterestId)}</p>
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
