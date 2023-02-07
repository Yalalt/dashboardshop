import { useState } from "react";
import { Link } from "react-router-dom";
import PageButton from "./PageButton";

const Pagination = ({ currentNumber, setCurrentNumber }) => {

  return (
    <div className="buttonsGroup">
      <Link to={`/page/${currentNumber - 1}`}>
        <PageButton
          name="ӨМНӨХ"
          btnClass={"constButtons"}
          btnOnClick={() => setCurrentNumber(currentNumber - 1)}
        />
      </Link>
      <Link to={`/page/1`}>
        {currentNumber > 3 && (<PageButton
          name="1"
          btnClass={"inactiveButton"}
          btnOnClick={() => setCurrentNumber(1)}
        />)}
      </Link>
      <Link to={`/page/`}>
        {currentNumber > 4 && (
          <PageButton name="." btnClass={"inactiveButton"} />
        )}
      </Link>
      <Link to={`/page/`}>
        {currentNumber > 3 && (
          <PageButton name="." btnClass={"inactiveButton"} />
        )}
      </Link>
      <Link to={`/page/${currentNumber - 2}`}>
        {currentNumber > 2 && (<PageButton
          name={currentNumber - 2}
          btnClass={"activeCurrentSiblingsBtn"}
          btnOnClick={() => setCurrentNumber(currentNumber - 2)}
        />)}
      </Link>
      <Link to={`/page/${currentNumber - 1}`}>
        {currentNumber > 1 && (<PageButton
          name={currentNumber - 1}
          btnClass={"activeCurrentSiblingsBtn"}
          btnOnClick={() => setCurrentNumber(currentNumber - 1)}
        />)}
      </Link>
      <Link to={`/page/${currentNumber}`}>
        <PageButton
          name={currentNumber}
          btnClass={"activeCurrentBtn"}
          btnOnClick={() => setCurrentNumber(currentNumber)}
        />
      </Link>
      <Link to={`/page/${Number(currentNumber) + 1}`}>
        <PageButton
          name={Number(currentNumber) + 1}
          btnClass={"activeCurrentSiblingsBtn"}
          btnOnClick={() => setCurrentNumber(currentNumber + 1)}
        />
      </Link>
      <Link to={`/page/${Number(currentNumber) + 2}`}>
        <PageButton
          name={Number(currentNumber) + 2}
          btnClass={"activeCurrentSiblingsBtn"}
          btnOnClick={() => setCurrentNumber(currentNumber + 2)}
        />
      </Link>

      <Link to={`/page/`}>
        <PageButton name="." btnClass={"inactiveButton"} />
      </Link>
      <Link to={`/page/`}>
        <PageButton name="." btnClass={"inactiveButton"} />
      </Link>
      <Link to={`/page/${Number(currentNumber) + 1}`}>
        <PageButton
          name="ДАРААХ"
          btnClass={"constButtons"}
          btnOnClick={() => setCurrentNumber(Number(currentNumber) + 1)}
        />
      </Link>
    </div>
  );
};
export default Pagination;
