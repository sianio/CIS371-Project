import { makeStyles } from '@material-ui/core/styles';

const toolbarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // eslint-disable-next-line quotes
  },
  bar: {
    flexDirection: "row",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default toolbarStyles;
