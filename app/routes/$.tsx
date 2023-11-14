import { Link } from "@remix-run/react";
import { json } from "@remix-run/node";

export function loader() {
  return json({});
}

export default function () {
  return (
    <div>
      <h1>hi</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
