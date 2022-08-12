import { useState } from "react";
import Hamburger from "hamburger-react";
import NavbarFilter from "./navbar-links-rander";

const MobileNavigation = () => {
  const [ open, setOpen ] = useState(false);
  
  return (
    <>
      <div className="hamburger">
        <Hamburger 
          direction="right"
          size={20}
          onToggle={() => {
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
