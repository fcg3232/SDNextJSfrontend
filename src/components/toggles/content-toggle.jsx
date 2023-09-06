import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
import { PlusWhiteIcon, XMarkWhiteIcon } from "../../assets/images";


// interface ContentToggleProps {
// 	title: string;
// 	content: React.ReactNode | React.ReactNode[];
// }

export const ContentToggle = ({ title, content }) => {
	const [collapse, setCollapse] = useState(false);
	const [status, setStatus] = useState("Closed");

	const onEntering = () => setStatus("Opening...");
	const onEntered = () => setStatus("Opened");
	const onExiting = () => setStatus("Closing...");
	const onExited = () => setStatus("Closed");
	const toggle = () => setCollapse(!collapse);

	return (
		<div>
			<Button
				color="primary"
				onClick={toggle}
				style={{
					marginBottom: "1rem",
					// backgroundColor: "transparent",
					outline: "none",
					boxShadow: "none",
					border: "none",
					width: "100%",
				}}
			>
				<div className="w-100 d-flex flex-row align-items-center justify-content-between">
					<span>{title}</span>
					<span>
						{collapse ? (
							<img src={XMarkWhiteIcon} alt="xmark-white.svg" />
						) : (
							<img src={PlusWhiteIcon} alt="plus-white.svg" />
						)}
					</span>
				</div>
			</Button>
			<Collapse
				// in={collapse}
				isOpen={collapse}
				onEntering={onEntering}
				onEntered={onEntered}
				onExiting={onExiting}
				onExited={onExited}
			>
				<div className="text-black" style={{ opacity: 0.5, paddingLeft: "2em", paddingBottom: "1em" }}>
					{content}
				</div>
			</Collapse>
		</div>
	);
};
