import * as React from "react";
import "../../index.css";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

const Footer = (props: any) => {
	const Footersection = props?._site?.c_footer?.map((link: any) => (
		<>
			<div style={{color:"white",marginTop:"40px"}}>
				<h2 className="" style={{marginLeft:"30px",marginRight:"30px"}}>{link.heading}</h2>
				<ul> {link?.name?.map((value: any) => (
					<li>
						<a href="">
							<span style={{color:"#979a9a",marginLeft:"30px",marginRight:"30px"}}>{value?.label} </span>
						</a>
					</li>
				))}
				</ul>
			</div>
		</>
	));
	return (
		<>
			<footer className="site-footer inline-block" style={{backgroundColor:"#00284a",height:"450px"}}>
				<div className="container" >
					{Footersection}
				</div>
			</footer>
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			>
				<p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>
				</p>
			</CookieConsent>
		</>
	);
};

export default Footer;



