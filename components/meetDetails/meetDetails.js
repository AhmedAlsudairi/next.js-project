import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import classes from "./meetDetails.module.css";

export default function Details(props) {
  return (
    <section className={classes.details}>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
