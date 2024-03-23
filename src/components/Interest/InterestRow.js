// Interests Row Component
const InterestRow = ({ iconClass, text }) => {
    return (
      <div className="col-md-6 col-lg-3">
        <p className="interests-icon">
          <span className={iconClass + " icon-3rem"}></span>
        </p>
        <p className="interests-p">
          {text}
        </p>
      </div>
    );
  };

  export default InterestRow;
