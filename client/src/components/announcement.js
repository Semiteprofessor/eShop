/** @format */

import React from "react";

setInterval(() => {
	let hours = document.getElementById("hours");
	let minutes = document.getElementById("minutes");
	let seconds = document.getElementById("seconds");
	let ampm = document.getElementById("ampm");

	let hh = document.getElementById("hh");
	let mm = document.getElementById("mm");
	let ss = document.getElementById("ss");

	let hr_dot = document.querySelector(".hr_dot");
	let mm_dot = document.querySelector(".mm_dot");
	let ss_dot = document.querySelector(".ss_dot");

	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	let am = h >= 12 ? "PM" : "AM";

	if (h > 12) {
		h = h - 12;
	}

	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	hours.innerHTML = h;
	minutes.innerHTML = m;
	seconds.innerHTML = s;
	ampm.innerHTML = am;

	// 12 houra clock
	hh.style.strokeDashoffset = 160 - (160 * h) / 12;
	// 60 minutes clock
	mm.style.strokeDashoffset = 160 - (160 * m) / 60;
	// 12 hour clock
	ss.style.strokeDashoffset = 160 - (160 * s) / 60;

	hr_dot.style.transform = `rotate(${h * 30}deg)`;
	mm_dot.style.transform = `rotate(${m * 6}deg)`;
	ss_dot.style.transform = `rotate(${s * 6}deg)`;
});


const price = 5000;
const Announcement = () => {
	return (
		<div className="header-top">
			<ul className="header-social-container">
				<li>
					<a href="#" className="social-link">
						<ion-icon name="logo-facebook"></ion-icon>
					</a>
				</li>

				<li>
					<a href="#" className="social-link">
						<ion-icon name="logo-twitter"></ion-icon>
					</a>
				</li>

				<li>
					<a href="#" className="social-link">
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
				</li>

				<li>
					<a href="#" className="social-link">
						<ion-icon name="logo-linkedin"></ion-icon>
					</a>
				</li>
			</ul>

			<div className="header-alert-news">
				<p>Super Deal! Free Shipping on Order Over &#8358;{price.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
			</div>

			{/* <div className="header-top-actions">
						<select name="currency">
							<option value="usd">USD &dollar;</option>
							<option value="eur">EUR &euro;</option>
						</select>

						<select name="language">
							<option value="en-US">English</option>
							<option value="es-ES">Espa&ntilde;ol</option>
							<option value="fr">Fran&ccedil;ais</option>
						</select>
					</div> */}
			<div id="time">
				<div className="circle a">
					<div className="dots a hr_dot"></div>
					<svg>
						<circle cx="50" cy="75" r="25"></circle>
						<circle cx="50" cy="75" r="25" id="hh"></circle>
					</svg>
					<div id="hours">00</div>
				</div>
				<div className="divider1">
					:
				</div>
				<div className="circle b">
					<div className="dots b mm_dot"></div>
					<svg>
						<circle cx="50" cy="75" r="25"></circle>
						<circle cx="50" cy="75" r="25" id="mm"></circle>
					</svg>
					<div id="minutes">00</div>
				</div>
				<div className="divider2">
					:
				</div>
				<div className="circle c">
					<div className="dots c ss_dot"></div>
					<svg>
						<circle cx="50" cy="75" r="25"></circle>
						<circle cx="50" cy="75" r="25" id="ss"></circle>
					</svg>
					<div id="seconds">00</div>
				</div>
				<div className="circle">
					<div id="ampm">AM</div>
				</div>
			</div>
		</div>
	);
};

export default Announcement;
