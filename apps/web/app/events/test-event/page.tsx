import { currentUser } from "@clerk/nextjs"
import Login from "../../generalComponents/Login";
import { Suspense } from "react";
import { DbUser, getAttending } from "../../../utils/cloudflare";
import { User } from "@clerk/nextjs/dist/server";
import Attending from "./components/Attending";
import EventTitle from "./components/Title";

export type UserAttending = DbUser & {
  attending: boolean;
  event: string;
}

const getUserAndAttending = async (): Promise<UserAttending> => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  const attending = await getAttending(user.id, "test-event");
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.primaryPhoneNumberId,
    id: user.id,
    attending,
    event: "test-event"
  }
}


const EventPage = async () => {  
  const userAndAttending = await getUserAndAttending();

  return (<>
      <EventTitle />
      {userAndAttending
        ? <Attending user={userAndAttending} />
        : <Login/>
      }
  </>
  )
}

export default EventPage;