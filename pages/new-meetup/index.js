import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  const onAddMeetup = (meetup) => {
    axios.post("/api/new-meetup", meetup).then((res) => {
      console.log(res.data);
    });
  };
  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}
