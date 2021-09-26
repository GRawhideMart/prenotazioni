import { useHeaderImageClasses } from "../../../../shared/useStyles";
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";

import MoreIcon from "@material-ui/icons/MoreVert";

const Header = ({ appointmentData, ...restProps }) => {
  const classes = useHeaderImageClasses({
    imageURL: appointmentData.backgroundImage,
  });
  return (
    <AppointmentTooltip.Header
      {...restProps}
      className={classNames(classes.backgroundImage, classes.header)}
      appointmentData={appointmentData}
      style={{
        background: `${appointmentData.backgroundColor} url(${appointmentData.backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <IconButton
        /* eslint-disable-next-line no-alert */
        onClick={() => alert(JSON.stringify(appointmentData))}
        className={classes.commandButton}
      >
        <MoreIcon />
      </IconButton>
    </AppointmentTooltip.Header>
  );
};

export default Header;
