import { MongoClient, ObjectID } from "mongodb";
import MeetDetails from "../../components/meetDetails/meetDetails";
import Head from "next/head";
import { Fragment } from "react";
export default function Details(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description}></meta>
      </Head>
      <MeetDetails
        id={props.id}
        img={props.img}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </Fragment>
  );
}
export async function getStaticPaths() {
  const clinet = await MongoClient.connect(
    "mongodb+srv://ahmed@cluster0.bgvji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = clinet.db();

  const meetCollection = db.collection("meetups");

  const result = await meetCollection.find({}, { _id: 1 }).toArray();

  console.log(result);

  clinet.close();

  return {
    fallback: false,
    paths: result.map((e) => ({
      params: {
        details: e._id.toString(),
      },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupID = context.params.details;

  const clinet = await MongoClient.connect(
    "mongodb+srv://ahmed@cluster0.bgvji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = clinet.db();

  const meetCollection = db.collection("meetups");

  const result = await meetCollection.findOne({ _id: ObjectID(meetupID) });

  clinet.close();

  return {
    props: {
      id: result._id.toString(),
      img: result.image,
      title: result.title,
      address: result.address,
      description: result.description,
    },
  };
}
