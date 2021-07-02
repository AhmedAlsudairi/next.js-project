import MeetDetails from "../../components/meetDetails/meetDetails";
export default function Details() {
  return (
    <MeetDetails
      id="m1"
      img="https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"
      title="evil"
      address="somthing"
      description="somewhat"
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          details: "m1",
        },
      },
      {
        params: {
          details: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupID = context.params.details;
  console.log(meetupID);
  return {
    props: {
      id: "m1",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
      title: "evil",
      address: "somthing",
      description: "somewhat",
    },
  };
}
