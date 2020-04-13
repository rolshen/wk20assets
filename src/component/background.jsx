import React from "react";
import PropTypes from "prop-types";
import myImage1 from "../img/background.png";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<img
							className={"img-fluid " + this.props.fadeIn}
							src={myImage1}
							alt=""
							style={{
								// borderRadius: 50 + "%",
								// height: 250 + "px",
								// width: 250 + "px"
								opacity: .2,
							}}
						/>
				<div className="top-container flex">
					<h1>
						Hello, I&apos;m Randy Olshen.
						<br /><br></br>
						I&apos;m a Full Stack Web Developer.
					</h1>
					{/* offset can be changed in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
