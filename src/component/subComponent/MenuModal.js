import "../../style/MenuModal.css";

function MenuModal({ pid, setOpenModal, openUpdateProductModal }) {

    function callOpenUpdateProductModal(prodId) {
      setOpenModal(false);
      openUpdateProductModal(prodId);
    }
  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="menuModalTitle">
          <h4>Бүтээгдэхүүн засварлах цэс</h4>
        </div>
        <div className="menuModalBody">
          <ul>
            <li onClick={() =>callOpenUpdateProductModal(pid)}>Өөрчлөх</li>
            <li>Устгах</li>
            <li>Вэбсайтаас нуух</li>
          </ul>
        </div>
        <div className="menuModalFooter">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Гарах
          </button>
        </div>
      </div>
    </div>
  );
}
export default MenuModal;
