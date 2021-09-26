import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";

const LabelComponent = (props) => {
  if (props.text === "Studio") {
    return null;
  }
  return <AppointmentForm.Label {...props} />;
};

export default LabelComponent;
