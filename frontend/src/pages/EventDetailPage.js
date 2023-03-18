import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{params.eventId}</p>
      <p>
        <Link to=".." relative="path">
          back
        </Link>
      </p>
    </>
  );
}
export default EventDetailPage;
