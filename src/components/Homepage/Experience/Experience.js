import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
	return (
		<div className="experience">
			<Container>
				<h4 className="">WHY CHOOSE US</h4>
				<h1>Countless Experiences</h1>
				<Row>
					{data.map((item) => (
						<Col key={item.id} md={3} xs={12} className="my-2">
							<div className="experience-card">
								<i className={`fas + ${item.iconName}`}></i>
								<h2>{item.title}</h2>
								<p>{item.desc}</p>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Experience;

const data = [
	{
		id: 0,
		iconName: "fa-compass",
		title: "Experienced",
		desc: "Average people say this to console themselves when they feel helpless to make a positive change in the world.",
	},
	{
		id: 1,
		iconName: "fa-globe",
		title: "WorldWide",
		desc: "Average people say this to give themselves permission to meander all over the place rather than set and achieve goals.",
	},
	{
		id: 2,
		iconName: "fa-wallet",
		title: "Cheap",
		desc: "Average people say this because it makes them feel better to pretend is directing events in their lives.",
	},
	{
		id: 3,
		iconName: "fa-headphones",
		title: "24/7 Service",
		desc: "Trusted results for Your Search Query. Check Visymo Search for the best results! Unlimited Access. 100% Secure.",
	},
];
