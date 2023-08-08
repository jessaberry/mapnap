import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Masonry } from "@mui/lab";
import { styled } from "@mui/material/styles";
import "./memory.css";
import { useEffect } from "react";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getMemoriesByUserIdAsync,
  getOtherPublicMemoriesAsync,
} from "../reducers/memory-thunks.mjs";
import { getTripsByUserIdAsync } from "../../trip/reducers/thunksTrip";
import { getExperiencesByUserIdAsync } from "../../experience/reducers/thunksExperience";

export default function Memory(props, children) {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);
  const memories = useSelector((state) => state.mem.memories);
  const otherPublicMemories = useSelector(
    (state) => state.mem.otherPublicMemories
  );
  const dispatch = useDispatch();

  const { user } = useAuth0();
  const userId = user.sub;

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
    console.log("userid", userId);
    dispatch(getMemoriesByUserIdAsync(userId));
    dispatch(getTripsByUserIdAsync(userId));
    dispatch(getExperiencesByUserIdAsync(userId));
    dispatch(getOtherPublicMemoriesAsync(userId));
    console.log("trips", trips);
    console.log("experiences", experiences);

    console.log("memories after dispatch", memories);
  }, []);

  if (!memories) {
    return <></>;
  } else {
    return (
      <PageLayout>
        <div>
          <h1>Memories</h1>
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
