import Link from "next/link";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          The loan page you&#39;re looking for doesn&#39;t exist or has been moved.
        </p>
        <Link href={"/dashboard"} className="notfound-button">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;