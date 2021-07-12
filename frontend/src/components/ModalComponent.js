import React from "react";
import Fade from "@material-ui/core/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import data from "../data";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
    width: "70%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function ModalComponent(props) {
  const history = useHistory();

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  const status = data.status.find((x) => x.id === props.match.params.id);
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
            <div className="status">
              <div className="context">
                <h1>{status.title}</h1>
                <p>
                 {status.description}
                </p>
              </div>
              <div className="content">
                <div className="reaction">
                  <ul>
                    <li>
                      <a>
                        <i>
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="text-black"
                            size="1x"
                          />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i>
                          <FontAwesomeIcon
                            icon={faComment}
                            className="text-black"
                            size="1x"
                          />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i>
                          <FontAwesomeIcon
                            icon={faShare}
                            className="text-black"
                            size="1x"
                          />
                        </i>
                      </a>
                    </li>
                    <li className="rightElli">
                      <a>
                        <i>
                          <FontAwesomeIcon
                            icon={faEllipsisH}
                            className="text-blac 40k"
                            size="1x"
                          />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="comments">
                  <div className="contComentario">
                    <div className="comentarios">
                      <div className="image">
                        <img src="../img/user1.png"></img>
                      </div>
                      <p>
                        {status.comments.description}
                      </p>
                    </div>
                    <ul>
                      <li>
                        <a>encantarme</a>
                      </li>
                      <li className="tex">
                        <a>responder</a>
                      </li>
                    </ul>
                    <div className="responses">
                      <a>ver respuestas</a>
                    </div>
                  </div>

                  <div className="comentar">
                    <div className="image">
                      <img src="../img/user1.png"></img>
                    </div>
                    <input placeholder="Write comments..."></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
