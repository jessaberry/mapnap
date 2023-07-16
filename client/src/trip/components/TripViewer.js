import "./styles.css";

const getPOI = (poiData, tripPOI) => {
  const poi = poiData.find(
    (data) => data.PointOfInterestId === Number(tripPOI)
  );
  return poi ? poi.Title : "";
};

const getActivity = (activityData, tripActivity) => {
  const activity = activityData.find(
    (data) => data.ExperienceTypeId === Number(tripActivity)
  );
  return activity ? activity.Title : "";
};

const getExpenses = (expenseData, tripExpenses) => {
  const expenses = expenseData.filter(
    (data) => data.ExperienceId === tripExpenses
  );
  return expenses.reduce((sum, expense) => sum + expense.Cost, 0);
};

const TripViewer = ({
  trip,
  experiences,
  expenses,
  poiData,
  activityData,
  handleDeleteExperience,
  handleAddExperience,
  handleDeleteTrip,
}) => {
  const tripExpenses = expenses.filter((expense) =>
    experiences.some((exp) => exp.ExperienceId === expense.ExperienceId)
  );
  const totalExpenses = tripExpenses.reduce(
    (sum, expense) => sum + expense.Cost,
    0
  );

  return (
    <div className="card-container">
      <div className="trip-item">
        <h3 className="trip-title">{trip.Title}</h3>
        <div className="trip-info">
          <div className="trip-description">{trip.Description}</div>
          <div className="poi-info">
            <div className="poi-starting">
              Starting Point: {getPOI(poiData, trip.StartingPointOfInterestId)}
            </div>
            <div className="poi-ending">
              Ending Point: {getPOI(poiData, trip.EndingPointOfInterestId)}
            </div>
          </div>
          <div className="trip-countries">Countries: {trip.Countries}</div>
          <div className="trip-expenses">Total Expenses: {totalExpenses}</div>
        </div>
        <div className="experience-list">
          <h4 className="experience-heading">Experiences</h4>
          <div className="experience-card-container">
            {experiences
              .filter((exp) => exp.TripId === trip.TripId)
              .map((exp) => (
                <div key={exp.ExperienceId} className="experience-card">
                  <h4 className="experience-title">{exp.Title}</h4>
                  <div className="experience-id">
                    Experience ID: {exp.ExperienceId}
                  </div>
                  <div className="experience-activity">
                    Activity: {getActivity(activityData, exp.ExperienceTypeId)}
                  </div>
                  <div className="experience-dates">
                    <div>
                      From:{" "}
                      {new Date(exp.StartingLocalDateTime).toLocaleDateString()}
                    </div>
                    <div>
                      To: {new Date(exp.EndingLocalDateTime).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="experience-address">
                    Address: {getPOI(poiData, exp.StartingPointOfInterestId)}
                  </div>
                  <div className="experience-description">{exp.Description}</div>
                  <div className="experience-cost">
                    Cost: {getExpenses(expenses, exp.ExperienceId)}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteExperience(exp.ExperienceId)}
                    className="delete-experience-button"
                  >
                    Delete Experience
                  </button>
                </div>
              ))}
          </div>
        </div>
        <div className="trip-buttons">
          <button
            type="button"
            onClick={() => handleAddExperience(trip.TripId)}
            className="add-experience-button"
          >
            Add Experience
          </button>
          <button
            type="button"
            onClick={() => handleDeleteTrip(trip)}
            className="delete-trip-button"
          >
            Delete Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripViewer;
