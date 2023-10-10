import btnUpIcon from "./../../IMG/btn-up.svg";
import { useState } from "react";

const BtnUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true);
      console.log(visible); 
    }  
    else if (scrolled <= 300){ 
      setVisible(false);
      console.log(visible);  
    } 
  };
  
  window.addEventListener('scroll', toggleVisible); 

  function scrollToTop(){
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  };
    return (
      <>
        {visible && (
        <div onClick={() => scrollToTop()} className="btn-up">
          <img src={btnUpIcon} alt="up"/>
      </div>
      )};
      </>
    );
}

export default BtnUp;