import React from "react";
import styles from "./Info.module.css";
import { Modal } from "antd";
import ImageSlider from "../../utils/Image Slider/ImageSlider";
import CancelIcon from "@mui/icons-material/Cancel";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

function Info({ data, setInfo }) {
  return (
    <div className={styles.info}>
      <Modal
        open={data}
        onCancel={() => setInfo(null)}
        className={styles.modal}
        centered
        footer={null}
        closeIcon={null}
      >
        <div className={styles.contentTop}>
          <ImageSlider files={data.files} autoPlay={false} maxImg={1} />
          <CancelIcon className={styles.cancel} onClick={() => setInfo(null)} />
        </div>
        <div className={styles.content}>
          <h2>
            {data.name}
            <Tooltip title="Visit" placement="top">
              <IconButton>
                <Link to={data.link} target="__blank">
                  <OpenInNewIcon sx={{ fontSize: "15px" }} />
                </Link>
              </IconButton>
            </Tooltip>
          </h2>
          <h5>{data.label}</h5>
          <p>{data.description}</p>
        </div>
      </Modal>
    </div>
  );
}

export default Info;
