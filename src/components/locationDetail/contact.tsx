import * as React from "react";
import Cta from "../commons/cta";
import Hours from "../commons/hours";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";
import timesvg from "../../images/watch-icn.svg";
import OpenClose from "../commons/openClose";


const Contact = (props: any) => {
  const {
    address,
    phone,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    c_storeInfoHeading,
    c_getDirectionsCTAText,
    c_getqoutelocation,
    timezone
  } = props;
  console.log(timezone, "time");
  // console.log(c_getqoutelocation,"qoute1");
  return (
    <>
      <div className="address-main-sec">
        <h4 className="box-title">{c_storeInfoHeading ? c_storeInfoHeading : "Branch Details"}</h4>

        <div className="icon-row content-col">
          <div className="icon">
            {" "}
            <img className=" " src={mapimage} width="20" height="20" alt="mapimage" />
          </div>
          <div className="  address-text notHighlight">
            {address.line1}
            <div>{address.line2 && <div>{address.line2}</div>}</div>
            <div>{address.city}</div>
            <div>{address.postalCode}</div>
          </div>
        </div>
        {phone ? (
          <div className="icon-row">
            <div className="icon">
              {" "}
              <img className=" " src={Phonesvg} width="22" height="22" alt="phonesvg" />
            </div>
            <div className="content-col">
              <a id="address" className=" location-phn" href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
        
        <OpenClose hours={hours} />
        <ul className="">
          <li className="" >
            {/* <GetDirection
              buttonText={c_getDirectionsCTAText ? c_getDirectionsCTAText : StaticData.getDirection}
              address={address}
              latitude={latitude}
              longitude={longitude}
            /> */}
          </li>
        </ul>
        <div className="" style={{display:"flex"}}>
        <button className="rounded-full"  style={{marginLeft:"" ,backgroundColor:"#00284a",color:"white",width: "136px",height: "36px",fontSize: "11px"}}>
        
          <a href={c_getqoutelocation?.link}>
          <span>{c_getqoutelocation?.label}</span>
        </a>
        </button>
        <span className="getdirection" style={{marginLeft:"45px"}}>
         <GetDirection 
              buttonText={c_getDirectionsCTAText ? c_getDirectionsCTAText : StaticData.getDirection}
              address={address}
              latitude={latitude}
              longitude={longitude}
            />
            </span>
            </div>
        <div className="map-sec">
          <CustomMap prop={yextDisplayCoordinate} />
        </div>
      </div>
      {hours && typeof hours.monday != "undefined" ? (
        <div className="hours">
          <div className="hours-sec">
            <div className="title-with-link-1">
              <h4 className="box-title">{"Branch Opening Hours"}</h4>
            </div>
            <div className="hours-div mb-5 md:mb-1 flex flex-col">
              {hours.holidayHours && typeof hours.reopenDate == "undefined" ? (
                <>
                  <Model
                    name={StaticData.Holdiay}
                    holidayHours={hours.holidayHours}
                    c_specific_day={c_specific_day}
                  />
                </>
              ) : (
                ""
              )}
              {/* <div className="title-with-link-1">
        <h4 className="box-title">{"Store Hours"}</h4>        
      </div> */}
              {hours && (
                <Hours
                  title={"Branch Opening Hours"}
                  additionalHoursText={additionalHoursText}
                  hours={hours}
                  c_specific_day={c_specific_day}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Contact;
