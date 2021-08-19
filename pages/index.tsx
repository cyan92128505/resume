/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "react-material-ui-carousel";
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Aoma Liao - Web/Flutter Engineer</title>
        <meta name="description" content="Web/Flutter Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <Card>
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
                    <h1>Wei-Hsin Liao</h1>
                    <h2>(Aoma)</h2>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      Web / Flutter Engineer
                    </Typography>
                    <p>
                      <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                      <span> Yunlin ,Taiwan</span>
                    </p>
                  </Grid>
                  <Grid item md={8}>
                    <ul>
                      <li>
                        I am a Front-End Developer and have experience in
                        Back-End and DevOps.
                      </li>
                      <li>
                        4 years of experience in the development of big data
                        type management background system.
                      </li>
                      <li>
                        3 years of experience in cross-platform Flutter APP.
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
                      href="https://github.com/cyan92128505"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "github-square"]} />
                    </a>
                  </IconButton>
                  <IconButton color="primary">
                    <a
                      href="https://www.linkedin.com/in/wei-hsin-liao-21ba3b60"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                  </IconButton>
                </Grid>
                <h2>Skill</h2>
                <Grid container alignItems="flex-start" spacing={3}>
                  <Grid item md={4}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      Front-End
                    </Typography>
                    <ul>
                      <li>Framework ( React, Vue...)</li>
                      <li>
                        Engineering Architecture (Status management, i18n,
                        Theme, Auth...)
                      </li>
                      <li>CI/CD</li>
                      <li>API connection</li>
                      <li>Live streaming</li>
                    </ul>
                  </Grid>
                  <Grid item md={4}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      Mobile
                    </Typography>
                    <ul>
                      <li>
                        Flutter cross-platform APP development (iOS/ Android)
                      </li>
                    </ul>
                  </Grid>
                  <Grid item md={4}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      DevOps
                    </Typography>
                    <ul>
                      <li>Github Action</li>
                      <li>Google Cloud Platform</li>
                      <li>Git</li>
                      <li>Gitlab CI/CD</li>
                    </ul>
                  </Grid>
                </Grid>
                <Grid container alignItems="flex-start" spacing={3}>
                  <Grid item md={4}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      Back-End
                    </Typography>
                    <ul>
                      <li>Node.js, Golang</li>
                      <li>RESTful api, gRPC,</li>
                      <li>Microservices</li>
                    </ul>
                  </Grid>
                  <Grid item md={4}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      Database
                    </Typography>
                    <ul>
                      <li>Use Redis to store and push across services</li>
                      <li>PostgreSQL (Basic database design)</li>
                    </ul>
                  </Grid>
                  <Grid item md={4}>
                    <Typography
                      variant="h6"
                      component="h6"
                      color="primary"
                      gutterBottom
                    >
                      Desktop
                    </Typography>
                    <ul>
                      <li>Electron desktop development</li>
                    </ul>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
        </Card>
        <h2>Experience</h2>
        <Timeline align="left">
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>
                Flutter Mobile Engineer
              </h3>
              <p>Anytime Co., Ltd • April 2021 - Now</p>
              <ul>
                <li>Develop Flutter APP</li>
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
                Flutter Front-End Engineer
              </h3>
              <p>New Garden Co., Ltd • April 2020 - February 2021</p>
              <ul>
                <li>
                  Design UI/UX, develop front-end interaction on the web, and
                  optimizing user experience
                </li>
                <li>
                  Responsible for system front-end and back-end development
                  work, design the overall system architecture
                </li>
                <li> Design microservice architecture on GCP</li>
                <li>
                  Integrate Web/App API to assist in platform interface and
                  integration
                </li>
                <li> Refactor the old system and import TDD (Golang)</li>
              </ul>
            </TimelineContent>
          </DisableOppositeTimelineItem>
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>Web/App Developer</h3>
              <p>GE MING Digital Media • October 2016 - March 2020</p>
              <h4>2018/07 - 2020/03</h4>
              <ul>
                <li>Develop Flutter cross-platform APP</li>
                <li>
                  Develop the front end of the operation and maintenance
                  platform
                </li>
              </ul>
              <h4>2016/10 - 2018/6</h4>
              <ul>
                <li>
                  Develop the front-end of the gaming information platform,
                  including the user-part and manager-part
                </li>
                <li>Use Electron to develop front-end deployment tools</li>
              </ul>
            </TimelineContent>
          </DisableOppositeTimelineItem>
        </Timeline>
        <Divider className={styles.product_term} />
        <h2>Education</h2>
        <Timeline align="left">
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>
                Changhua Normal University 2014 - 2016
              </h3>
              <h4>Master of digital content technology and management</h4>
            </TimelineContent>
          </DisableOppositeTimelineItem>
          <DisableOppositeTimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className={styles.experience_title}>
                Changhua Normal University 2008 - 2013
              </h3>
              <h4>Bachelor of math</h4>
            </TimelineContent>
          </DisableOppositeTimelineItem>
        </Timeline>
        <Divider className={styles.product_term} />
        <h2>Project</h2>
        <Card className={styles.product_term}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item md={5} className={styles.no_padding}>
              <Carousel animation="slide" indicators={false}>
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
              </Carousel>
            </Grid>
            <Grid item md={7} className={styles.no_padding}>
              <Box className={styles.product_content}>
                <h3>Gliona</h3>
                <h4>
                  A Serverless management system based on React-Admin Manage the
                  visited veterinary hospital for pet business
                </h4>
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
        <Card className={styles.product_term}>
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
                <h3>Cardovo</h3>
                <h4>
                  The Flutter App: Cardovo, which is a convenient application
                  that can store all your membership cards.
                </h4>
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
        <Card className={styles.product_term}>
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
                <h3>Mobile Wallet</h3>
                <h4>
                  P2P money Transfer Bill Payments International money
                  remittance Disbursements: Payroll/ Social/ Government Consumer
                  App
                </h4>
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
        <Card className={styles.product_term}>
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
                <h3>Gliona</h3>
                <h4>
                  Use MEAN (MongoDB, Express, Angular and Node) stack for build
                  a “Meaningful Gamification Learning Management System” Member
                  can learn and build their mobile game on GAMILMS.
                </h4>
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
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
