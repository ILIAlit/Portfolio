import btnUpIcon from "./../../IMG/btn-up.svg";

const BtnUp = () => {
function onClick(){
  alert("Click");
};

  return (
    <div className="btn-up" onClick={() => onClick()}>
        <img src={btnUpIcon} alt="up"/>
    </div>
  );
}

export default BtnUp;