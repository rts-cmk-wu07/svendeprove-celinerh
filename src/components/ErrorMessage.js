function ErrorMessage({ message = "Noget gik galt. Prøv igen senere." }) {
  return <p className="text-primaryText">{message}</p>;
}

export default ErrorMessage;
