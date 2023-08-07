import React from "react";
import Animation from "../../utils/SideAnimation/Animation";
import style from "./Contact.module.css";
import { Button, TextField } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

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
  return (
    <div className={style.container}>
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
        />
        <CssTextField
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          className="textfield"
          sx={{ margin: "10px", width: "90%" }}
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
        />
        <Button
          sx={{
            backgroundColor: "#db8e35",
            color: "white",
            marginTop: "20px",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#f7ac56",
            },
            margin: "10px",
            width: "80%",
          }}
          variant="contained"
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Contact;
