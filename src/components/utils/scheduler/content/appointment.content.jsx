import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

const AppointmentContent = (props) => {
  const { data, style } = props;

  return (
    <Appointments.AppointmentContent
      style={{
        ...style,
        color: data.color,
        textShadow:
          (data.hoverColor === "" ? "black" : data.hoverColor) + " 1px 1px",
        textAlign: "center",
      }}
      {...props}
    />
  );
};

export default AppointmentContent;
