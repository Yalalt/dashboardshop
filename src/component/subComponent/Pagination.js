import { useState } from "react";
import { Link } from "react-router-dom";
import PageButton from "./PageButton";

const Pagination = ({ currentPage, setCurrentNumber }) => {

  return (
    <div className="buttonsGroup">
      <Link to={`/page/${currentPage - 1}`}>
        <PageButton
          name="ӨМНӨХ"
          btnClass={"constButtons"}
          btnOnClick={() => setCurrentNumber(currentPage - 1)}
        />
      </Link>
      <Link to={`/page/1`}>
        {currentPage > 3 && (<PageButton
          name="1"
          btnClass={"inactiveButton"}
          btnOnClick={() => setCurrentNumber(1)}
        />)}
      </Link>
      <Link to={`/page/`}>
        {currentPage > 4 && (
          <PageButton name="." btnClass={"inactiveButton"} />
        )}
      </Link>
      <Link to={`/page/`}>
        {currentPage > 3 && (
          <PageButton name="." btnClass={"inactiveButton"} />
        )}
      </Link>
      <Link to={`/page/${currentPage - 2}`}>
        {currentPage > 2 && (<PageButton
          name={currentPage - 2}
          btnClass={"activeCurrentSiblingsBtn"}
          btnOnClick={() => setCurrentNumber(currentPage - 2)}
        />)}
      </Link>
      <Link to={`/page/${currentPage - 1}`}>
        {currentPage > 1 && (<PageButton
          name={currentPage - 1}
          btnClass={"activeCurrentSiblingsBtn"}
          btnOnClick={() => setCurrentNumber(currentPage - 1)}
        />)}
      </Link>
      <Link to={`/page/${currentPage}`}>
        <PageButton
          name={currentPage}
          btnClass={"activeCurrentBtn"}
          btnOnClick={() => setCurrentNumber(currentPage)}
        />
      </Link>
      <Link to={`/page/${Number(currentPage) + 1}`}>
        <PageButton
          name={Number(currentPage) + 1}
          btnClass={"activeCurrentSiblingsBtn"}
          btnOnClick={() => setCurrentNumber(currentPage + 1)}
        />
      </Link>
      <Link to={`/page/${Number(currentPage) + 2}`}>
        <PageButton
          name={Number(currentPage) + 2}
          btnClass={"activeCurrentSiblingsBtn"}
          btnOnClick={() => setCurrentNumber(currentPage + 2)}
        />
      </Link>

      <Link to={`/page/`}>
        <PageButton name="." btnClass={"inactiveButton"} />
      </Link>
      <Link to={`/page/`}>
        <PageButton name="." btnClass={"inactiveButton"} />
      </Link>
      <Link to={`/page/${Number(currentPage) + 1}`}>
        <PageButton
          name="ДАРААХ"
          btnClass={"constButtons"}
          btnOnClick={() => setCurrentNumber(Number(currentPage) + 1)}
        />
      </Link>
    </div>
  );
};
export default Pagination;
