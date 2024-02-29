import Link from "next/link";

export default function Home() {
  return (
    <div className="body">
      <Link className="root-links" href="./IPV/step-one">
        ipv
      </Link>
      <Link className="root-links" href="./admin/configuration">
        configure endpoints
      </Link>
      <Link className="root-links" href="./admin">
        you say you are an admin
      </Link>
    </div>
  );
}
