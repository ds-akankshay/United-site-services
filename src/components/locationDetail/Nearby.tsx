import * as React from "react";
import ApiCall from "../../Apis/ApiCall";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import OpenClose from "../commons/openClose"
import timesvg from "../../images/watch-icn.svg"
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg"
import { Addresssvg, mobilesvg, View_Store } from "../../../sites-global/global";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "@yext/pages/components";

export default function Nearby(props: any) {

  const [neabyData, setnearbyData] = React.useState(props.externalApiData.response.results);
  const metersToMiles = (meters: number) => {

    const miles = meters * 0.000621371;
    return miles.toFixed(2);
  }

  return (

    <>
      {/* <Splide
        id="splide-nearby"
        options={{
          rewind: false,
          type: "slide",
          perPage: 3,
          perMove: 1,
          arrows: false,
          drag: false,
          pagination: false,
          lazyLoad: "nearby",
          breakpoints: {
            1279: {
              perPage: 1,
              drag: true,
              pagination: true,
              arrows: false,
              type: "splide",
            },
          },
        }}
      > */}
      {neabyData.map((location: any, index: Number) => {

        // let url = "";
        // var name: any = location.data.name?.toLowerCase();
        // var region: any = location.data.address.region?.toLowerCase();
        // var initialregion: any = region.toString();
        // var finalregion: any = initialregion.replaceAll(" ", "-");
        // var city: any = location.data.address.city?.toLowerCase();
        // var initialrcity: any = city.toString();
        // var finalcity: any = initialrcity.replaceAll(" ", "-");
        // var string: any = name.toString();
        // let result1: any = string.replaceAll(" ", "-");
        // if (!location.data.slug) {
        //   url = `/${location.data.id}-${result1}.html`;
        // } else {
        //   url = `/${location.data.slug.toString()}.html`;
        // }

        if (index > 0) {
          return (
            <>
              {/* <SplideSlide key={index}> */}
              <div className="nearby-card">
                <div className="location-name-miles icon-row">
                  <h2><Link className="inline-block notHighlight" href={`/${location.data.id}`}
                    data-ya-track={`${location.data.name}`}
                    eventName={`${location.data.name}`}
                    rel="noopener noreferrer">{location.data.name} </Link></h2>
                    </div>
                    <div>
                    {typeof location.distance != "undefined" ?
                <div className="distance">
                  {metersToMiles(location.distance)} <span>Miles{location.miles}</span>
                </div>
                : ''}
                    </div>
                <div className="icon-row content-col">
                  <Address address={location.data.address} />
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path id="phone" d="M680.26,4645.84a2.061,2.061,0,0,0-1.721-.84,2.483,2.483,0,0,0-1.448.46c-.227.15-.5.35-.809.59a11.556,11.556,0,0,0-1.3,1.26,3.037,3.037,0,0,0-.978,1.96c.106,2.83,2.075,6.08,5.845,9.86s7.009,5.76,9.8,5.87h.073a2.935,2.935,0,0,0,1.944-.99,13.481,13.481,0,0,0,1.249-1.3c.269-.33.468-.58.6-.77a2.675,2.675,0,0,0,.477-1.74,2.037,2.037,0,0,0-.843-1.47c-1.384-.98-2.617-1.81-3.713-2.47a2.092,2.092,0,0,0-1.081-.29,2.929,2.929,0,0,0-1.351.36c-.176.09-.529.29-1.054.59-.564-.46-1.233-1.08-2-1.85a26.49,26.49,0,0,1-1.868-2.05c.294-.54.487-.9.582-1.09a2.357,2.357,0,0,0,.074-2.39C681.773,4648.02,680.954,4646.8,680.26,4645.84Zm9.421,17.16c-2.124-.08-4.972-1.82-8.419-5.28s-5.181-6.32-5.262-8.49c0,.01.014-.01.043-.05a4.706,4.706,0,0,1,.415-.52,10.105,10.105,0,0,1,1.045-1.03c.288-.22.527-.39.716-.52l.034-.02a.458.458,0,0,1,.286-.09c.093,0,.1,0,.109.02.658.91,1.455,2.1,2.375,3.56.019.03.01.15-.14.43-.123.24-.412.78-.871,1.61l-.3.55.362.51a22.749,22.749,0,0,0,2.456,2.8,24.621,24.621,0,0,0,2.744,2.45l.53.39.568-.33c.816-.48,1.347-.78,1.556-.88a.959.959,0,0,1,.426-.14c.04,0,.054,0,.061.01,1.031.63,2.228,1.42,3.565,2.37.016.01.017.01.022.06a.7.7,0,0,1-.152.42c-.068.1-.244.32-.488.62a11.2,11.2,0,0,1-1.063,1.1,3.018,3.018,0,0,1-.578.45Z" transform="translate(-674 -4645)" fill="#00284a" fill-rule="evenodd" />
                  </svg>{location.data.mainPhone}</div>

                <div className="icon-row closeing-div">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                    <g id="watch-icn" transform="translate(-52 -615)">
                      {/* <circle id="Ellipse_1_copy" data-name="Ellipse 1 copy" cx="14" cy="14" r="14" transform="translate(52 615)" fill="#eb0000"/> */}
                      <path id="Icon_material-watch-later" data-name="Icon material-watch-later" d="M10.819,3a7.819,7.819,0,1,0,7.819,7.819A7.842,7.842,0,0,0,10.819,3ZM14.1,14.1l-4.066-2.5V6.91H11.21v4.066l3.519,2.111Z" transform="translate(55 618)" fill="#00284a" />
                    </g>
                  </svg>
                  {location.data.hours ?
                    <div className="flex open-now-string items-center " data-id={`main-shop-${location.data.id}`} >
                      <OpenClose timezone={location.data.timezone} hours={location.data.hours} deliveryHours={location.data.hours}></OpenClose>
                    </div> :
                    <div className="closeddot notHighlight red-dot">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                        <circle id="Ellipse_5" data-name="Ellipse 5" cx="4" cy="4" r="4" fill="#00284a" />
                      </svg>
                      <div className="hours-info text-lg font-second-main-font closeddot">
                        Closed
                      </div>
                    </div>
                  }
                </div>
                <div className="button-bx">

                  <Link className="rounded-full" style={{ backgroundColor: "#00284a", color: "white", height: "36px", width: "120px", fontSize: "smaller", marginLeft: "10px" }} href={`/${location.data.id}`}
                    data-ya-track={`viewstore-${location.data.name}`}
                    eventName={`viewstore-${location.data.name}`}
                    rel="noopener noreferrer">
                    {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                    BRANCH DETAILS</Link>
                  <GetDirection style={{ marginLeft: "20px" }}
                    buttonText={props.c_getDirectionsCTAText ? props.c_getDirectionsCTAText : "Get directions"} address={location.data.address} latitude={location.data.displayCoordinate ? location.data.displayCoordinate.latitude : location.data.yextDisplayCoordinate.latitude} longitude={location.data.displayCoordinate ? location.data.displayCoordinate.longitude : location.data.yextDisplayCoordinate.longitude} />

                </div>
              </div>
              {/* </SplideSlide> */}
            </>

          )
        }
      }

      )
      }
      {/* </Splide> */}
    </>
  )
}
