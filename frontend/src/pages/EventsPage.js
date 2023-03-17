import { Link } from "react-router-dom";

const EVENTS = [
  { id: "events-1", title: "music-festival" },
  { id: "events-2", title: "dart-festival" },
  { id: "events-3", title: "bike-festival" },
  { id: "events-4", title: "house-festival" },
  { id: "events-5", title: "kite-festival" },
  { id: "events-6", title: "climb-festival" },
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      {EVENTS.map((event) => (
        <h2 key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </h2>
      ))}
    </>
  );
}

export default EventsPage;
