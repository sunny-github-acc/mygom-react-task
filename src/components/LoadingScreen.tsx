const LoadingScreen = ({ text = "Loading..." }) => (
  <div className="loading-screen">
    <div className="text">{text}</div>
  </div>
);

export default LoadingScreen;
