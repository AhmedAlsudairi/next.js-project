import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import MeetUpList from "../../components/meetups/NewMeetupForm";

export default function Home() {
  const onAddMeetup = (meetup) => {
    console.log(meetup);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}
