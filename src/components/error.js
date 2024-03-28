import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div className="error-page">
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.elegantthemes.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F08%2F000-http-error-codes.png&tbnid=Leystw72I66tAM&vet=12ahUKEwiJ0o-1wK-EAxXSbmwGHWvzAKkQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.elegantthemes.com%2Fblog%2Fwordpress%2Fthe-ultimate-guide-to-common-http-error-codes&docid=G84NVnYGVQ80kM&w=1080&h=608&q=error&ved=2ahUKEwiJ0o-1wK-EAxXSbmwGHWvzAKkQMygAegQIARB0" alt="Error Image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;