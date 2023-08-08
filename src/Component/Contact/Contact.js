import React, { useState } from "react";
import Animation from "../../utils/SideAnimation/Animation";
import style from "./Contact.module.css";
import { Button, TextField } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import SnackbarComponent from "../../utils/Notification/Notification";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#071017",
        color: "#071017",
      },
      "& input": {
        color: "white",
      },
      "& textarea": {
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

  const handleForm = (value, name) => {
    const newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  };

  const handleSubmit = async () => {
    console.log("click");
    setLoading(true);
    const newError = { ...error };
    let isError = false;
    if (!form?.name?.length) {
      isError = true;
      newError.name = true;
    }
    if (!form?.email?.length || !form?.email?.includes("@")) {
      newError.email = true;
      isError = true;
    }
    if (!form?.message?.length) {
      newError.message = true;
      isError = true;
    }

    if (isError) {
      setError(newError);
      setLoading(false);
      return;
    } else {
      setError({ name: false, email: false, message: false });
    }

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER}/forms/personalWeb`,
      form
    );

    const data = res.data;
    const success = data.success;
    setSnackbarMessage("Thank you, will contact you soon.");
    if (success) {
      setSnackbarSeverity("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSnackbarSeverity("error");
    }
    setOpenSnackbar(true);
    setLoading(false);
  };

  return (
    <div className={style.container}>
      <SnackbarComponent
        message={snackbarMessage}
        severity={snackbarSeverity}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      />
      <Animation direction="top" duration="08">
        <h1 className={style.about}>Get In Touch</h1>
      </Animation>
      <Animation direction="bottom" duration="1">
        <div className={style.underLine}></div>
      </Animation>
      <div className={style.form}>
        <CssTextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          className="textfield"
          sx={{ margin: "10px", width: "90%" }}
          onChange={(e) => handleForm(e.target.value, "name")}
          helperText={error.name ? "Please write your name." : ""}
          error={error.name}
          value={form.name}
        />
        <CssTextField
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          className="textfield"
          sx={{ margin: "10px", width: "90%" }}
          onChange={(e) => handleForm(e.target.value, "email")}
          helperText={error.email ? "Please write your valid email." : ""}
          error={error.email}
          value={form.email}
        />
        <CssTextField
          id="outlined-textarea"
          label="Message"
          placeholder="Message"
          className="textfield"
          multiline
          rows={5}
          maxRows={5}
          variant="outlined"
          sx={{ margin: "10px", width: "90%" }}
          onChange={(e) => handleForm(e.target.value, "message")}
          helperText={error.message ? "Please leave a message." : ""}
          error={error.message}
          value={form.message}
        />
        <Button
          endIcon={
            loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <SendIcon />
            )
          }
          sx={{
            marginTop: "20px",
            "&.MuiButton-contained": {
              backgroundColor: "#db8e35",
              color: "white",
              "&:hover": {
                backgroundColor: "#f7ac56",
              },
            },
            width: "90%",
          }}
          variant="contained"
          onClick={handleSubmit}
          loading={loading}
          disabled={loading}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Contact;
