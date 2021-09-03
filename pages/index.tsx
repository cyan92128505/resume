/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
// import Carousel from "react-material-ui-carousel";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";

import resource from "../src/resources/resource";
import { T, useLang, useSetLang } from "../src/i18n";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
  wrapper: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(5),
  },
  profile_image: {
    borderRadius: "100%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  experience_title: {
    margin: 0,
  },
  product_term: {
    marginBottom: theme.spacing(3),
  },
  no_padding: {
    padding: "0!important;",
  },
  product_content: {
    padding: theme.spacing(3),
  },
  email: {
    padding: 12,
    verticalAlign: "middle",
    lineHeight: "24px",
  },
  skill_term: {
    width: "33%",
  },
}));

const DisableOppositeTimelineItem = withStyles({
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
})(TimelineItem);

const Home: NextPage = () => {
  const styles = useStyles();
  const setLang = useSetLang();
  const lang = useLang();

  return (
    <div className={styles.container}>
      <Head>
        <title>Aoma Liao - Web/Flutter Engineer</title>
        <meta name="description" content="Web/Flutter Engineer" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Container maxWidth="md">
        <Card elevation={1}>
          <Grid container spacing={3} alignItems="center">
            <Grid item md={1}></Grid>
            <Grid item md={10}>
              <div className={styles.wrapper}>
                <Grid container alignItems="flex-start" spacing={3}>
                  <Grid item md={4}>
                    <img
                      className={styles.profile_image}
                      alt="Profile Image"
                      src={resource.profile.image}
                      width={resource.profile.width}
                      height={resource.profile.height}
                    ></img>
                    <h1>
                      <T id="NAME" />
                    </h1>
                    <h2>
                      <T id="NICKNAME" />
                    </h2>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      <T id="JOB_TITLE" />
                    </Typography>
                    <p>
                      <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                      <span>
                        {" "}
                        <T id="LOCATION" />
                      </span>
                    </p>
                  </Grid>
                  <Grid item md={8}>
                    <ul>
                      <li>
                        <T id="INFO_1" />
                      </li>
                      <li>
                        <T id="INFO_2" />
                      </li>
                      <li>
                        <T id="INFO_3" />
                      </li>
                      <li>
                        <T id="INFO_4" />
                      </li>
                    </ul>
                  </Grid>
                </Grid>
                <Grid container alignItems="flex-end" justifyContent="flex-end">
                  <Typography
                    variant="caption"
                    component="span"
                    color="primary"
                    align="center"
                    className={styles.email}
                  >
                    <a
                      href="mailto:cyan92128505@gmail.com"
                      rel="noreferrer"
                      target="_blank"
                      color="primary"
                    >
                      cyan92128505@gmail.com
                    </a>
                  </Typography>
                  <IconButton color="primary">
                    <a
                      href="https://www.linkedin.com/in/wei-hsin-liao-21ba3b60"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                  </IconButton>
                  <IconButton color="primary">
                    <a
                      href="https://github.com/cyan92128505"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "github-square"]} />
                    </a>
                  </IconButton>
                </Grid>
                <h2>
                  <T id="SKILL" />
                </h2>
                <Grid container alignItems="flex-start" spacing={3}>
                  <Grid item md={4} className={styles.skill_term}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      <T id="FRONT_END" />
                    </Typography>
                    <ul>
                      <li>
                        <T id="FRONT_END_INFO_1" />
                      </li>
                      <li>
                        <T id="FRONT_END_INFO_2" />
                      </li>
                      <li>
                        <T id="FRONT_END_INFO_3" />
                      </li>
                      <li>
                        <T id="FRONT_END_INFO_4" />
                      </li>
                      <li>
                        <T id="FRONT_END_INFO_5" />
                      </li>
                    </ul>
                  </Grid>
                  <Grid item md={4} className={styles.skill_term}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      <T id="MOBILE" />
                    </Typography>
                    <ul>
                      <li>
                        <T id="MOBILE_INFO_1" />
                      </li>
                    </ul>
                  </Grid>
                  <Grid item md={4} className={styles.skill_term}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      <T id="DEVOPS" />
                    </Typography>
                    <ul>
                      <li>
                        <T id="DEVOPS_INFO_1" />
                      </li>
                      <li>
                        <T id="DEVOPS_INFO_2" />
                      </li>
                      <li>
                        <T id="DEVOPS_INFO_3" />
                      </li>
                      <li>
                        <T id="DEVOPS_INFO_4" />
                      </li>
                    </ul>
                  </Grid>
                </Grid>
                <Grid container alignItems="flex-start" spacing={3}>
                  <Grid item md={4} className={styles.skill_term}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      <T id="BACK_END" />
                    </Typography>
                    <ul>
                      <li>
                        <T id="BACK_END_INFO_1" />
                      </li>
                      <li>
                        <T id="BACK_END_INFO_2" />
                      </li>
                      <li>
                        <T id="BACK_END_INFO_3" />
                      </li>
                    </ul>
                  </Grid>
                  <Grid item md={4} className={styles.skill_term}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      <T id="DATABASE" />
                    </Typography>
                    <ul>
                      <li>
                        <T id="DATABASE_INFO_1" />
                      </li>
                      <li>
                        <T id="DATABASE_INFO_2" />
                      </li>
                    </ul>
                  </Grid>
                  <Grid item md={4} className={styles.skill_term}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      <T id="DESKTOP" />
                    </Typography>
                    <ul>
                      <li>
                        <T id="DESKTOP_INFO_1" />
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
        </Card>
        <h2>
          <T id="EXPERIENCE" />
        </h2>
        <Timeline align="left">
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>
                <T id="EXPERIENCE_COMPANY_1_JOB_TITLE" />
              </h3>
              <p>
                <T id="EXPERIENCE_COMPANY_1" />
              </p>
              <ul>
                <li>
                  <T id="EXPERIENCE_COMPANY_1_INFO_1" />{" "}
                  <Typography color="primary" variant="body2" component="span">
                    <a
                      href="https://www.anytime.tw/"
                      target="_blank"
                      rel="noreferrer"
                      color=""
                    >
                      (anytime.tw)
                    </a>
                  </Typography>
                </li>
              </ul>
            </TimelineContent>
          </DisableOppositeTimelineItem>
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>
                <T id="EXPERIENCE_COMPANY_2_JOB_TITLE" />
              </h3>
              <p>
                <T id="EXPERIENCE_COMPANY_2" />
              </p>
              <ul>
                <li>
                  <T id="EXPERIENCE_COMPANY_2_INFO_1" />
                </li>
                <li>
                  <T id="EXPERIENCE_COMPANY_2_INFO_2" />
                </li>
                <li>
                  <T id="EXPERIENCE_COMPANY_2_INFO_3" />
                </li>
                <li>
                  <T id="EXPERIENCE_COMPANY_2_INFO_4" />
                </li>
                <li>
                  <T id="EXPERIENCE_COMPANY_2_INFO_5" />
                </li>
              </ul>
            </TimelineContent>
          </DisableOppositeTimelineItem>
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>
                <T id="EXPERIENCE_COMPANY_3_JOB_TITLE" />
              </h3>
              <p>
                <T id="EXPERIENCE_COMPANY_3" />
              </p>
              <h4>
                <T id="EXPERIENCE_COMPANY_3_INFO_1" />
              </h4>
              <ul>
                <li>
                  <T id="EXPERIENCE_COMPANY_3_INFO_1_1" />
                </li>
                <li>
                  <T id="EXPERIENCE_COMPANY_3_INFO_1_2" />
                </li>
              </ul>
              <h4>
                <T id="EXPERIENCE_COMPANY_3_INFO_2" />
              </h4>
              <ul>
                <li>
                  <T id="EXPERIENCE_COMPANY_3_INFO_2_1" />
                </li>
                <li>
                  <T id="EXPERIENCE_COMPANY_3_INFO_2_2" />
                </li>
              </ul>
            </TimelineContent>
          </DisableOppositeTimelineItem>
        </Timeline>
        <Divider className={styles.product_term} />
        <h2>
          <T id="EDUCATION" />
        </h2>
        <Timeline align="left">
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>
                <T id="EDUCATION_SCHOOL_1" />
              </h3>
              <Typography variant="body1" component="p">
                <T id="EDUCATION_SCHOOL_1_INFO" />
              </Typography>
            </TimelineContent>
          </DisableOppositeTimelineItem>
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>
                <T id="EDUCATION_SCHOOL_2" />
              </h3>
              <Typography variant="body1" component="p">
                <T id="EDUCATION_SCHOOL_2_INFO" />
              </Typography>
            </TimelineContent>
          </DisableOppositeTimelineItem>
        </Timeline>
        <Divider className={styles.product_term} />
        <h2>
          <T id="PROJECT" />
        </h2>
        <Card className={styles.product_term} elevation={0}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item md={5} className={styles.no_padding}>
              <img
                alt="Gliona Demo"
                src={resource.gliona1.image}
                width={resource.gliona1.width}
                height={resource.gliona1.height}
              ></img>
              {/* <Carousel animation="slide" indicators={false}>
                <img
                  alt="Gliona Demo"
                  src={resource.gliona1.image}
                  width={resource.gliona1.width}
                  height={resource.gliona1.height}
                ></img>
                <img
                  alt="Gliona Demo"
                  src={resource.gliona2.image}
                  width={resource.gliona2.width}
                  height={resource.gliona2.height}
                ></img>
              </Carousel> */}
            </Grid>
            <Grid item md={7} className={styles.no_padding}>
              <Box className={styles.product_content}>
                <h3>
                  <T id="PROJECT_GLIONA_TITLE" />
                </h3>
                <Typography variant="body1" component="p">
                  <T id="PROJECT_GLIONA_INFO" />
                </Typography>
                <h5>
                  <a
                    href="https://cyan92128505.github.io/gliona/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://cyan92128505.github.io/gliona/
                  </a>
                </h5>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card className={styles.product_term} elevation={0}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item md={5} className={styles.no_padding}>
              <img
                alt="Cardovo Demo"
                src={resource.cardovo.image}
                width={resource.cardovo.width}
                height={resource.cardovo.height}
              ></img>
            </Grid>
            <Grid item md={7} className={styles.no_padding}>
              <Box className={styles.product_content}>
                <h3>
                  <T id="PROJECT_CARDOVO_TITLE" />
                </h3>
                <Typography variant="body1" component="p">
                  <T id="PROJECT_CARDOVO_INFO" />
                </Typography>
                <h5>
                  <a
                    href="https://geming-rddev.github.io/cardovo-info/view/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://geming-rddev.github.io/cardovo-info/view/
                  </a>
                </h5>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card className={styles.product_term} elevation={0}>
          {" "}
          <Grid container alignItems="center" spacing={3}>
            <Grid item md={5} className={styles.no_padding}>
              <img
                alt="Wallet Demo"
                src={resource.wallet.image}
                width={resource.wallet.width}
                height={resource.wallet.height}
              ></img>
            </Grid>
            <Grid item md={7} className={styles.no_padding}>
              <Box className={styles.product_content}>
                <h3>
                  <T id="PROJECT_WALLET_TITLE" />
                </h3>
                <Typography variant="body1" component="p">
                  <T id="PROJECT_WALLET_INFO" />
                </Typography>
                <h5>
                  <a
                    href="https://geming-rddev.github.io/geming-digi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://geming-rddev.github.io/geming-digi/
                  </a>
                </h5>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card className={styles.product_term} elevation={0}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item md={5} className={styles.no_padding}>
              <img
                alt="GAMILMS"
                src={resource.gamilms.image}
                width={resource.gamilms.width}
                height={resource.gamilms.height}
              ></img>
            </Grid>
            <Grid item md={7} className={styles.no_padding}>
              <Box className={styles.product_content}>
                <h3>
                  <T id="PROJECT_GAMILMS_TITLE" />
                </h3>
                <Typography variant="body1" component="p">
                  <T id="PROJECT_GAMILMS_INFO" />
                </Typography>
                <h5>
                  <a
                    href="https://github.com/cyan92128505/gamilms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/cyan92128505/gamilms
                  </a>
                </h5>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Box sx={{ height: 50 }}>
          <Typography variant="body2" color="secondary" align="center">
            {"Copyright © "}
            AJ-Home {new Date().getFullYear()}.
          </Typography>{" "}
          <IconButton
            color="primary"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          >
            <FontAwesomeIcon icon={["fas", "language"]} />
          </IconButton>
          <div style={{ marginTop: "2rem" }}></div>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
