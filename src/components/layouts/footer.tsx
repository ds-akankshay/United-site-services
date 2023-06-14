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
			<div style={{ color: "white", marginTop: "40px" }}>
				<h2  style={{ marginLeft: "30px", marginRight: "30px" }}>{link.heading}</h2>
				<ul> {link?.name?.map((value: any) => (
					<li>
						<a >
							<span style={{ color: "#979a9a", marginLeft: "30px", marginRight: "30px" }}>{value?.label} </span>
						</a>
					</li>
				))}
				</ul>
			</div>
		</>
	));
	const socialicon = props?._site?.c_socialicon?.map((link: any) => (
		<>
			<a >
				<img src={link.url} style={{ height: "22px" }} />
			</a>
		</>
	));
	const text = props?._site?.c_text?.url.map((link: any) => (
		<>
			<a >
				<div >{link.label}</div>
			</a>
		</>
	));
	return (
		<>
			<footer className="site-footer inline-block" style={{ backgroundColor: "#00284a", height: "450px" }}>
				<div className="container" >
					{Footersection}
				</div>
				<div className="flex space-x-4" style={{ marginTop: "45px", marginLeft: "55px" }}>
					{socialicon}
					<div style={{ color: "white", marginLeft: "196px", fontSize: "smaller" }} className="flex" >
						{props._site.c_text.text1}
						{text}
						{props._site.c_text.text2}
					</div>
					<div>
					</div>
				</div>
				<div style={{ color: "white", marginTop: "22px", fontSize: "smaller", marginLeft: "398px" }}>
					{props._site.c_line}
				</div>
			</footer>
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			><p>
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



