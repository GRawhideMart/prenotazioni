import { makeStyles, withStyles, TableCell, TableRow } from "@material-ui/core";

// Custom hooks
export const useCustomStyles = makeStyles((theme) => ({
  navbarRoot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  poliradioButton: {
    marginRight: theme.spacing(2),
  },
  toolbarFlex: {
    marginLeft: "8px",
    marginRight: "8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarBrand: {
    backgroundImage: 'url("https://membri.poliradio.it/img/logo.svg")',
    backgroundRepeat: "no-repeat",
    marginTop: "20px",
    transform: "scale(1.8)",
    verticalAlign: "middle",
  },
  avatar: {
    color: "#fff",
    backgroundColor: theme.palette.primary.dark,
  },
  title: {
    border: "16px solid",
    padding: "32px",
    borderColor: theme.palette.primary.main,
    borderStyle: "double",
    textShadow: "5px 10px 5px " + theme.palette.primary.dark,
  },
  table: {
    minWidth: 700,
  },
  footerRoot: {
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh",
  },
  mainFooter: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  homeRoot: {
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(8),
  },
  rowItemId: {
    paddingLeft: "32px",
  },
  breadcrumb: {
    "& > * + *": {
      margin: theme.spacing(2),
    },
    marginBottom: theme.spacing(2),
  },
  backToTopAnchor: {
    height: "0px",
    margin: "0px",
    padding: "0px",
  },
  requestButton: {
    margin: theme.spacing(1),
  },
  formElements: {
    margin: theme.spacing(2),
  },
  dialogAppBar: {
    position: "relative",
  },
  dialogTitle: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  inventaryAddButton: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
    marginBottom: "16px",
    "&:hover": {
      backgroundColor: theme.palette.success.light,
    },
  },
  inventaryEditButton: {
    marginInline: theme.spacing(1),
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.light,
    },
  },
  inventaryDeleteButton: {
    marginInline: theme.spacing(1),
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.light,
    },
  },
  field: {
    marginTop: 24,
    marginBottom: 24,
    display: "block",
  },
}));

export const useHeaderImageClasses = makeStyles({
  header: {
    height: "260px",
    backgroundSize: "cover",
  },
  backgroundImage: ({ imageURL }) => ({
    background: `url(${imageURL})`,
  }),
});

// Custom withStyles
export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.secondary.main,
    },
  },
}))(TableRow);
