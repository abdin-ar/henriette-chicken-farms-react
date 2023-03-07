import { Link } from "react-router-dom";
import useStorage from "../../hooks/useStorage";

const TermsPrompt = () => {
  const [isAgreed, setIsAgreed] = useStorage("termsAgreementClosed", false);

  if (isAgreed) {
    return null;
  }

  return (
    <div className="terms-prompt">
      <div>
        <p>
          This is a DEMO WEBSITE. By continuing to use this website, you agree
          to our <Link to="/terms">Terms of Service</Link>
        </p>
        <button
          type="button"
          className="btn btn-bsh-regular"
          onClick={() => setIsAgreed(true)}
        >
          Ok, I got it
        </button>
      </div>
    </div>
  );
};
export default TermsPrompt;
