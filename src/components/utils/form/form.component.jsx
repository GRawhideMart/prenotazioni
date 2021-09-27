import Container from "@material-ui/core/Container";

import PropTypes from "prop-types";

const Form = ({ children, onSubmit }) => {
  return (
    <Container>
      <form onSubmit={onSubmit}>{children}</form>
    </Container>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
