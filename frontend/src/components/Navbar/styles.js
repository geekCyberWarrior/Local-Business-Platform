import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",
    },
    heading: {
        color: "rgba(0,183,255, 1)",
        textDecoration: "none",
    },
    image: {
        marginLeft: "15px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        width: "50%",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
    },
    userName: {
        display: "flex",
        alignItems: "center",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    signIn: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        margin: "0 2em",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));
