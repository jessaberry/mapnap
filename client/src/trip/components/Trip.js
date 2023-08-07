import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addTripAsync,
  deleteTripAsync,
  getTripsByUserIdAsync,
  getPOIAsync,
  getOtherPublicTripsAsync,
  updateTripAsync,
} from "../reducers/thunksTrip";
import {
  getExperiencesAsync,
  deleteExperienceAsync,
} from "../../experience/reducers/thunksExperience";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import TripDetails from "./TripDetails";
import TripForm from "./TripForm";
import TripPersonalViewer from "./TripPersonalViewer";
import TripPublicViewer from "./TripPublicViewer";

import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Trip(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(null);
  const { user } = useAuth0();
  const userID = user?.sub;
  const trips = useSelector((state) => state.trip.trips);
  const publicTrips = useSelector((state) => state.trip.public);
  const poi = useSelector((state) => state.trip.poi);

  const handleAddTrip = (trip) => {
    const tripWithUserID = {
      ...trip,
      UserId: userID,
    };
    dispatch(addTripAsync(tripWithUserID)).then(() => {
      dispatch(getTripsByUserIdAsync(userID));
    });
  };

  const handleDeleteTrip = (trip) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this trip? This action cannot be undone."
    );
    if (confirm) {
      dispatch(deleteTripAsync(trip.TripId)).then(() => {
        dispatch(getTripsByUserIdAsync(userID));
      });
    }
  };

  const handleEditTrip = (trip) => {
    dispatch(updateTripAsync(trip)).then(() => {
      dispatch(getTripsByUserIdAsync(userID));
    });
  };

  const handleAddExperience = (tripUUID) => {
    navigate("/experience", { state: { tripUUID } });
  };

  const handleDeleteExperience = (expID) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this experience? This action cannot be undone."
    );
    if (confirm) {
      dispatch(deleteExperienceAsync(expID)).then(() => {
        dispatch(getExperiencesAsync());
      });
    }
  };

  const showTripDetails = (trip) => {
    setVisible((visibleTrip) => (visibleTrip === trip ? null : trip));
  };

  const getExperiences = (tripID) => {
    return experiences
      .filter((exp) => exp.TripId === tripID)
      .sort(
        (a, b) =>
          new Date(a.StartingLocalDateTime) - new Date(b.StartingLocalDateTime)
      );
  };

  useEffect(() => {
    dispatch(getTripsByUserIdAsync(userID));
    dispatch(getOtherPublicTripsAsync(userID));
    dispatch(getExperiencesAsync());
    dispatch(getPOIAsync());
  }, [dispatch, userID]);

  if (trips.length === 1) {
    return (
      <>
        <PageLayout>
          <div>
            <h2>{trips[0].Title}</h2>
            <TripDetails trip={trips} />
          </div>
        </PageLayout>
      </>
    );
  } else {
    return (
      <PageLayout>
        <div>
          <h2>Dashboard</h2>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              color: "var(--white)",
              backgroundColor: "var(--sauder-blue)",
              "&:hover": {
                borderColor: "var(--sauder-blue)",
                backgroundColor: "var(--sauder-green)",
              },
            }}
          >
            New Trip
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Add a Trip
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <TripForm handleAddTrip={handleAddTrip} />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </BootstrapDialog>

          <h2>My trips</h2>
          <TripPersonalViewer
            trips={trips}
            poi={poi}
            visible={visible}
            getExperiences={getExperiences}
            showTripDetails={showTripDetails}
            handleAddExperience={handleAddExperience}
            handleDeleteExperience={handleDeleteExperience}
            handleEditTrip={handleEditTrip}
            handleDeleteTrip={handleDeleteTrip}
          />
          <h2>Other people's public trips</h2>
          <TripPublicViewer
            publicTrips={publicTrips}
            poi={poi}
            visible={visible}
            getExperiences={getExperiences}
            showTripDetails={showTripDetails}
          />
        </div>
      </PageLayout>
    );
  }
}
