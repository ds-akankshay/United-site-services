import * as React from "react";
import Cta from "../commons/cta";



const Header = (props: any) => {

  const Header1 = props?._site?.c_headername?.map((link: any) => (
    <a style={{ marginTop: "30px" }}>
      <span > {link.name}</span>
    </a>
  ));
  return (
    <>
      <div style={{ color: "#00539b", fontWeight: "bold" }}>
        <div className="flex space-x-9" >
          <img src={props._site.c_image.url} style={{ height: "60px", width: "115px", marginLeft: "30px" }} />

          {Header1}
          <img className="search" src={props?._site?.c_icon.url} style={{ marginLeft: "50px" }} />
          <img src={props._site.c_iconcontact.url} style={{ height: "17px", marginTop: "30px", marginLeft: "80px" }} />
          <a style={{ marginTop: "30px", marginLeft: "inherit" }}>{props._site.c_contactheader}</a>
          <img className="cursor-auto" src={props._site.c_circle.url} style={{ height: "130px", marginLeft: "70px" }} />
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Header;
