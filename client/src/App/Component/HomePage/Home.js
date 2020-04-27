/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MultiCarousel from "../../Component/SharedCompnent/MultiCarousel";
import Carousel from "../../Component/Carousel";
import Card from "../Cards/Card";

// import MultiCarousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import logo from "../../../Assets/Img/logo.png";
import liran from "../../../Assets/Img/liran.jpg";
import pic1 from "../../../Assets/Img/top1.jpg";
import pic2 from "../../../Assets/Img/top2.jpg";
import pic3 from "../../../Assets/Img/top3.jpg";
import pic4 from "../../../Assets/Img/top4.jpg";

import {
  Container,
  Avatar,
  Paper,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {},
  },
  paper: {
    flexGrow: 1,
    direction: "rtl",
    backgroundColor: "",
    padding: "2%",
    paddingRight: "8%",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    // margin: "1%",
    width: theme.spacing(50),
    ["@media (max-width:700px)"]: {
      width: "250px",
      height: "250px",
    },
    height: theme.spacing(50),
    margin: "auto",
    display: "block",
  },
  typography: {
    textAlign: "initial",
  },
  serviceType: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: "auto",
  },
  button: {
    display: "flex",
    margin: "0 auto",
    backgroundColor: "#27ae60",
    "&:hover": {
      backgroundColor: "#e67e22",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Carousel />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar src={liran} className={classes.avatar} />
          </Grid>
          <Grid item xs={9} sm container>
            <Grid item xs={10} container direction='column' spacing={2}>
              <Grid item xs>
                <Typography
                  className={classes.typography}
                  gutterBottom
                  variant='h2'>
                  לירן בן צבי - מאלף כלבים
                </Typography>
                <Typography
                  className={classes.typography}
                  variant='body1'
                  gutterBottom>
                  שמי לירן בן צבי, מאלף כלבים בשרון ובמרכז, בעל ניסיון של עשור
                  באילוף מאות כלבים מכל רחבי הארץ. במהלך העבודה שלי עם כלבים
                  מסוגים שונים ובעלי בעיות התנהגות שונות, אני לומד כל פעם מחדש
                  כי אילוף הוא תהליך מורכב הכרוך בהפגנת כבוד ועקביות וביצירת שפה
                  משותפת בין הבעלים לבין הכלב. בעבודה שלנו יחד נלמד כי כלב
                  שמתרגל לטיפול מסור וסדר יום קבוע, יהפוך לכלב מאוזן, וכמו שאני
                  תמיד אומר, כלב מאוזן הוא כלב מאושר! אנא אל תהססו להתקשר בכדי
                  להתחיל בתהליך או אפילו רק כדי להתייעץ ולשוחח:&nbsp;052-3845449
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {/* <MultiCarousel /> */}

      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={3} justify='flex-start'>
            <Avatar src={pic1} className={classes.serviceType} />
            <Typography gutterBottom align='center' variant='h4'>
              אילוף מתקדם
            </Typography>
            <Typography variant='body1' align='center' gutterBottom>
              אילוף מתקדם הוא אילוף המיועד לכלב שכבר עבר אילוף בסיסי, מכיר את
              הפקודות הבסיסיות ומוכן לרמות אילוף מתקדמות יותר.
            </Typography>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'>
              קרא עוד...
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Avatar src={pic2} className={classes.serviceType} />
            <Typography gutterBottom align='center' variant='h4'>
              אילוף פנסיון
            </Typography>
            <Typography variant='body1' align='center' gutterBottom>
              אילוף פנסיון הוא אילוף המתאים במיוחד למי שרוצה תוצאות ברמה הגבוהה
              ביותר אך אין ברשותו זמן רב לעבודה עם הכלב.
            </Typography>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'>
              קרא עוד...
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Avatar src={pic3} className={classes.serviceType} />
            <Typography gutterBottom align='center' variant='h4'>
              אילוף ביתי
            </Typography>
            <Typography variant='body1' align='center' gutterBottom>
              אילוף כלבים ביתי מתאים במיוחד לבעלי משמעת עצמית וזמן לעבודה
              יומיומית עם הכלב.
            </Typography>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'>
              קרא עוד...
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Avatar src={pic4} className={classes.serviceType} />
            <Typography gutterBottom align='center' variant='h4'>
              חינוך גורים
            </Typography>
            <Typography variant='body1' align='center' gutterBottom>
              חינוך גורים הוא תהליך חשוב שמטרתו הקניית הרגלים נכונים לאורך כל
              חייו של הכלב ומהווה את הבסיס למערכת היחסים עמו.
            </Typography>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'>
              קרא עוד...
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
