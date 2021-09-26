import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

const Appointment = ({ children, style, data, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    data={data}
    style={{
      ...style,
      background: `${data.backgroundColor} url(${data.backgroundImage})`,
      backgroundSize: "cover",
      border: "1px solid black",
    }}
  >
    {children}
  </Appointments.Appointment>
);

export default Appointment;
