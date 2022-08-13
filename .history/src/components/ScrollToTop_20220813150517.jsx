import React ,{useSate} from "react";
import { BsChevronUp } from "react-icons/bs";
export default function ScrollToTop() {
const [visible,setVisible]=useState(false);
  window.addEventListener("scroll",()=>{
    window.pageYoffset>100 ?setVisible
  })
return (
   
  <>
  <div className={``}>

  </div>
  
  </>
  );
}
