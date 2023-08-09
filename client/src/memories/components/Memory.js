import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Masonry } from "@mui/lab";
import { styled } from "@mui/material/styles";
import "./memory.css";
import { useEffect, useState } from "react";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getMemoriesByUserIdAsync,
  getOtherPublicMemoriesAsync,
} from "../reducers/memory-thunks.mjs";
import { getTripsByUserIdAsync } from "../../trip/reducers/thunksTrip";
import { getExperiencesByUserIdAsync } from "../../experience/reducers/thunksExperience";
import MemoryForm from "./MemoryForm";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import * as PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
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

// '64ba2a2a9aa1ec7120dd2a6d'

export default function Memory(props, children) {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);
  const memories = useSelector((state) => state.mem.memories);
  const otherPublicMemories = useSelector(
    (state) => state.mem.otherPublicMemories
  );
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  const { user } = useAuth0();
  const userId = user.sub;

  const handleOpen = () => {
    setIsShown(true);
  };
  const handleClose = () => {
    setIsShown(false);
    dispatch(getMemoriesByUserIdAsync(userId));
  };

  useEffect(() => {
    dispatch(getMemoriesByUserIdAsync(userId));
    dispatch(getTripsByUserIdAsync(userId));
    dispatch(getExperiencesByUserIdAsync(userId));
    dispatch(getOtherPublicMemoriesAsync(userId));
  }, []);

  if (!memories) {
    return <></>;
  } else {
    return (
      <PageLayout>
        <div>
          <h1>Memories</h1>
          <BootstrapDialog
            zindex={2000}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isShown}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Add a Memory
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <MemoryForm
                isShown={isShown}
                userId={userId}
                trips={trips}
                experiences={experiences}
              ></MemoryForm>
            </DialogContent>
            <DialogActions>
              <Button
                fullWidth={true}
                autoFocus
                onClick={handleClose}
                className="SauderButton"
              >
                Close
              </Button>
            </DialogActions>
          </BootstrapDialog>

          <Button
            onClick={handleOpen}
            sx={{
              color: "var(--white)",
              backgroundColor: "var(--sauder-blue)",
              "&:hover": {
                borderColor: "var(--sauder-blue)",
                backgroundColor: "var(--sauder-green)",
              },
            }}
          >
            Add a new Memory
          </Button>
          <h2>My Memories:</h2>

          <Box sx={{ width: "100%", minHeight: 829 }}>
            <Masonry
              colunn={{ xs: 3, sm: 4 }}
              spacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {memories.map((memory, index) => (
                <div key={index}>
                  <img
                    className="masonryImage"
                    src={memory.url}
                    alt={memory.title}
                    loading="lazy"
                  />
                  <Typography>{memory.title}</Typography>
                </div>
              ))}
            </Masonry>
          </Box>
          <h2>Memories from other users</h2>
          <Box sx={{ width: "100%", minHeight: 829 }}>
            <Masonry
              colunn={{ xs: 3, sm: 4 }}
              spacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {otherPublicMemories.map((memory, index) => (
                <div key={index}>
                  <img
                    className="masonryImage"
                    src={memory.url}
                    alt={memory.title}
                    loading="lazy"
                  />
                  <Typography>{memory.title}</Typography>
                </div>
              ))}
            </Masonry>
          </Box>
        </div>
      </PageLayout>
    );
  }
}
