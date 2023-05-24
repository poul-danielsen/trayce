import { UserAttending } from "../app/events/test-event/page";


export const getAttending = async (userId: string, eventId: string) => {
  const apiUrl =  process.env.NEXT_PUBLIC_CLOUDFLARE_URL;
  const data = await fetch(`${apiUrl}/events/${eventId}/${userId}`)
  const json = await data.json()
  
  const attending = json?.attending;
  
  console.log(json)
  
  return !!attending;
}

export type DbUser = {
  firstName: string;
  lastName: string;
  phone: string;
  id: string;
}

export const registerAttendance = async (user: UserAttending): Promise<boolean> => {
  const apiUrl =  process.env.NEXT_PUBLIC_CLOUDFLARE_URL;
  console.log(user)
  const userForDb: DbUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    id: user.id,
  }

  const res = await fetch(`${apiUrl}/events/${user.event}`, {
    method: "POST",
    body: JSON.stringify(userForDb)
  })

  return res.status === 200;
}