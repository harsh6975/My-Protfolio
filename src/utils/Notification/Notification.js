import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Portal from "@mui/base/Portal";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarComponent = ({ message, severity, open, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Portal>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <div>
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </div>
      </Snackbar>
    </Portal>
  );
};

export default SnackbarComponent;
