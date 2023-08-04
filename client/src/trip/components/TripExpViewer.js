const TripExpViewer = ({ trip, getExperiences, handleDeleteExperience }) => {
  return (
    <div className="experience-list">
      <h4>Experiences</h4>
      <div className="experience-card-container">
        {getExperiences(trip.TripId).map((experience) => (
          <div className="experience-card" key={experience.ExperienceId}>
            <h5 className="experience-title">{experience.Title}</h5>
            <p>Cost: ${experience.Cost}</p>
            <p>Notes: {experience.Description}</p>
            <p>Public? {String(experience.IsPublic)}</p>
            {handleDeleteExperience !== null && (
              <button
                onClick={() => handleDeleteExperience(experience.ExperienceId)}
              >
                Edit Experience
              </button>
            )}
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
