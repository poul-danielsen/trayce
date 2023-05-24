import { Hono } from 'hono'

type Bindings = {
  db: KVNamespace
}

type User = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  id?: string;
} | undefined;

type Event = {
  attendees?: User[];
} | null;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

const app = new Hono<{Bindings: Bindings}>()

// Add event
app.put('/events/:key', async (c) => {
  // read key from params, and verify it does not already exist
  const eventKey = c.req.param('key');
  const eventString = await c.env.db.get(eventKey)

  if (eventString) {
    c.status(400)
    return c.text("Event key already exists")
  }

  // add event
  await c.env.db.put(eventKey, JSON.stringify({attendees: []}))

  c.status(200)
  return c.text("Event added")
})

// Add user to event.
app.post('/events/:key', async (c) => {
  // read key from params, and verify that event exists
  const eventKey = c.req.param('key');  
  const eventString = await c.env.db.get(eventKey)
  if (!eventString) {
    c.status(404)
    return c.text("Event not found")
  }
  const event = JSON.parse(eventString) as Event;

  // verify user details and add to event
  const user = (await c.req.json()) as User

  if (!user || !user.firstName || !user.lastName || !user.phone || !user.id) {
    c.status(404)
    c.res.headers.append("Access-Control-Allow-Origin", "*")
    return c.text("Invalid user")
  }

  // check if user is already attending
  if (event.attendees.findIndex((attendee) => attendee.id === user.id) !== -1) {
    c.status(400)
    return c.text("User already attending")
  }

  // add user to event
  event.attendees.push(user);
  await c.env.db.put(eventKey, JSON.stringify(event));

  c.status(200)
  return c.text("User added")
})

// check if user is attending event
app.get('/events/:event/:user', async (c) => {
  // read keys from params and verify that event exists
  const eventKey = c.req.param('event');
  const userId = c.req.param('user');

  const eventString = await c.env.db.get(eventKey)
  const event = JSON.parse(eventString) as Event;
  if (!event) {
    c.status(404)
    return c.text("Event not found")
  }

  if (event.attendees.findIndex((attendee) => attendee.id === userId) === -1) {
    return c.json({
      attending: false,
    })
  }

  return c.json({
    attending: true
  })
})

app.get('/', (c) => {
  return c.text('Service Up')
})

export default app
