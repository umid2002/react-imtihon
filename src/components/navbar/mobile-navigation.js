import NavbarFilter from "./navbar-links-rander";
import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";
import { GiHamburgerMenu } from 'react-icons/gi';

const MobileNavigation = () => {
  const {open, setOpen} = useContext(TodosContext);
  document.addEventListener("scroll", ()=>{
    if(open){
      setOpen(false)
    }
  })

  return (
    <>
      <div className="hamburger">
        <GiHamburgerMenu
          onClick={() => {
            if(open){
              setOpen(false);
            }else{
              setOpen(true);
            }
          }}
        />
      </div>
      {open && <NavbarFilter />}
    </>
  );
};
export default MobileNavigation;
