

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      <h2 className="loading-text">Processing Your Loan Request</h2>
      <p className="loading-subtext">Securely connecting to financial partners...</p>
    </div>
  );
};

export default Loading;