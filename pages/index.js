import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    title: "evil",
    address: "somthing",
    desciption: "somewhat",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    title: "taowe",
    address: "somthing2",
    desciption: "somewhat2",
  },
];
export default function Home() {
  return <MeetUpList meetups={DUMMY_DATA} />;
}
