import * as React from "react";
import Cta from "../commons/cta";



const Header = (props: any) => {

  const Header1 = props?._site?.c_headername?.map((link: any) => (
    <a href="" className="" style={{ marginTop: "30px" }}>
      <span className=""  > {link.name}</span>
    </a>
  ));
return (
    <>
      <div className="">
        <div className="flex space-x-4" >
          <img src={props._site.c_image.url} alt=""  style={{height:"60px",width:"115px",marginLeft: "30px"}}/>
          
          {Header1}
        </div>
        
     </div>
    </>
  );
};

export default Header;
