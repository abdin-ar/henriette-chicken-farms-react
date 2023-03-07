import { useState } from "react";
import SearchForm from "./SearchForm";
import Questions from "./Questions";
import faqsData from "./faqsData";

function sortSearchResults(resultsArr) {
  resultsArr.sort(function (a, b) {
    return b.found - a.found;
  });
  const finalArr = [];
  for (let u = 0; u < resultsArr.length; u++) {
    if (resultsArr[u].found > 0) {
      finalArr.push(resultsArr[u]);
    }
  }
  return finalArr;
}

const FaqsMain = () => {
  const [displayFaqs, setDisplayFaqs] = useState(faqsData);
  const [searchCriteria, setSearchCriteria] = useState("");

  function faqsSearch(criteria) {
    const criteriaArray = criteria.toLowerCase().split(" ");
    const newFaqsData = faqsData.map((faq) => {
      return { ...faq, found: 0 };
    });

    criteriaArray.forEach((c) => {
      newFaqsData.forEach((faq) => {
        const dataMerged = `${faq.q} ${faq.a}`;
        const data = dataMerged.toLowerCase();
        let found = faq.found;
        if (data.includes(c)) {
          found++;
        }
        faq.found = found;
      });
    });

    const finalData = sortSearchResults(newFaqsData);
    setDisplayFaqs(finalData);
  }

  function faqsReset() {
    setDisplayFaqs(faqsData);
  }

  return (
    <>
      <SearchForm
        search={faqsSearch}
        reset={faqsReset}
        criteria={searchCriteria}
        setCriteria={setSearchCriteria}
      />
      <Questions displayFaqs={displayFaqs} criteria={searchCriteria} />
    </>
  );
};

export default FaqsMain;
