import React from "react";
import { useHistory } from "react-router-dom";

import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {
      outline: "none",
    },
  },
  paper: {
    width: "40%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function ModalPublic() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const handleOpen = () => async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <div className="formPublic">
              <form>
                  <input placeholder="Titulo"/>
                  <textarea placeholder="Descr"/>
                  <input type="submit" value="Submit"/>              </form>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
