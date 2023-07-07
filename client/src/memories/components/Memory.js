import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";
import { Provider, useSelector } from "react-redux";
import { Masonry } from "@mui/lab";
import { styled } from "@mui/material/styles";
import "./memory.css";
import store from "../../reducers/store";
import { useEffect } from "react";

export default function Memory(props, children) {
  const memories = useSelector((state) => state.mem.memories);
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
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", minHeight: 829 }}>
        <Masonry colunn={{ xs: 3, sm: 4 }} spacing={{ xs: 1, sm: 2, md: 3 }}>
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
    </>
  );
}
