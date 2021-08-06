import React from "react";
import { useHistory } from "react-router-dom";

import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

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
    width: "50%",
    minHeight: "30%",
    resize: "vertical",
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
            <div className="containerPublic">
              <form>
                <input type="text" placeholder="Título" />
                <TextareaAutosize
                  rows={10}
                  rowsMax={20}
                  aria-label="maximum height"
                  placeholder="Desahoga esa mente"
                  className="textAr"
                />
                <input type="submit" value="Publicar" />
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
