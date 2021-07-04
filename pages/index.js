import MeetUpList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="nothing"></meta>
      </Head>
      <MeetUpList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  //fetch data
  const clinet = await MongoClient.connect(
    "mongodb+srv://ahmed@cluster0.bgvji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = clinet.db();

  const meetCollection = db.collection("meetups");

  const result = await meetCollection.find().toArray();

  console.log(result);

  clinet.close();
  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
