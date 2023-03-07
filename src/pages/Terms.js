import NormalSection from "../components/common/NormalSection";
import NormalText from "../components/common/NormalText";

const Terms = () => {
  return (
    <NormalSection title="Terms of Service">
      <NormalText>
        This is a DEMO WEBSITE created to showcase a demonstration of a
        brochure-type website. All the content of this website is dummy content,
        and the business "Henriette Chicken Farms" is fictional. Any similarity
        to an actual brand name is purely coincidental.
      </NormalText>
      <NormalText>
        By using this website, you agree to our Terms of Service:
      </NormalText>
      <ul className="ul">
        <li className="normal-text">
          Users cannot copy this website in whole or in part or use it for
          commercial purposes without the owner's explicit agreement.
        </li>
        <li className="normal-text">
          This demo website is not intended for making any actual purchases or
          payments. The website owner is not responsible for any kind of loss or
          damage that occurs to users as a result of using this website.
        </li>
        <li className="normal-text">
          Users' use of this website cannot have any legal consequences against
          the website owner, nor can it be invoked in lawsuits, fines or legal
          actions against the website owner.
        </li>
        <li className="normal-text">
          Users are not allowed to use this website to do anything that is
          against the law. In the event that the user does so, he/she bears full
          responsibility alone, and the website owner bears no responsibility.
        </li>
        <li className="normal-text">
          The user may not carry out any cyber-attack that harms the website,
          its owner, or its other users, and if he/she does so, he/she may be
          legally prosecuted.
        </li>
        <li className="normal-text">
          The website owner may update the Terms of Service at any time, and the
          updated version shall become effective immediately without prior
          notice.
        </li>
      </ul>
      <NormalText>Last Updated: Feb 15th, 2023.</NormalText>
    </NormalSection>
  );
};

export default Terms;
