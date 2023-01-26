import "../../style/modalMenu.css";

const updateProdModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalMenu = (props) => {
  return (
    <div style={updateProdModalStyle} contentLabel="Select action">
      <div className="getMenuEditUpdateProduct">
        <p>Өөрчлөх</p>
        <p>Устгах</p>
        <p>Вебсайтаас нуух</p>
        <p>{props}</p>
      </div>
    </div>
  );
};
export default ModalMenu;
