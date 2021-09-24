import { useScrollTrigger, Zoom } from "@material-ui/core";
import PropTypes from "prop-types";
import { useCustomStyles } from "../../../shared/useStyles";

const ScrollTop = ({ children, window, toolbarId }) => {
  const classes = useCustomStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      //   "#back-to-top-anchor"
      `#${toolbarId}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.homeRoot}
      >
        {children}
      </div>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollTop;
