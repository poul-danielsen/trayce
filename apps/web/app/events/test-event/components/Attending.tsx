import { UserAttending } from "../page";
import Register from "./Register";
import Registered from "./Registered";

const Attending = ({user}: {user: UserAttending}) => {
  return (
    <>
      {user && user.attending 
        ? <Registered />
        : <Register user={user} />
      }
    </>
  )
}

export default Attending;