import React from "react";
import qikTik from "../img/qikTik.png";
import fitnessTracker from "../img/fitnessTracker.png";
import budgetTracker from "../img/budgetTracker.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"qiktikbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>QikTik</h2>
									</div>
									<div>
										<button
											id="qiktik-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var qiktikModal = document.getElementById(
													"vqiktik"
												);
												modalBG.style.display = "block";
												qiktikModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"fitnesstrackerbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Fitness Tracker</h2>
									</div>
									<div>
										<button
											id="fitnesstracker-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var fitnesstrackerModal = document.getElementById(
													"vfitnesstracker"
												);
												modalBG.style.display = "block";
												fitnesstrackerModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"budgettrackerbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Budget Tracker</h2>
									</div>
									<div>
										<button
											id="budgettracker-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var budgettrackerModal = document.getElementById(
													"vbudgettracker"
												);
												modalBG.style.display = "block";
												budgettrackerModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vqiktik" className="modal-card">
						<div className="visual">
							<img src={qikTik} alt=""/>
						</div>
						<div className="modal-info">
							<h2>QikTik</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype stock web-application to
										provide information about specific stocks
										and charts to reflect their performance.
									</li>
									<li>
										Designed with HTML5, CSS, Bootstrap,
										MongoDB, and React.js.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://qiktik.herokuapp.com/"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var qiktikModal = document.getElementById(
											"vqiktik"
										);
										modalBG.style.display = "none";
										qiktikModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="vfitnesstracker" className="modal-card">
						<div className="visual">
							<img src={fitnessTracker} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Fitness Tracker</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype website to track a persons workouts
										as well as display total cardio and total 
										weight/reps.
									</li>
									<li>
										Developed with HTML5, CSS, Bootstrap,
										Javascript, MongoDB.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://randyfitnesstracker.herokuapp.com/?id=5e8d411695308d0017dbf3a9"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var fitnesstrackerModal = document.getElementById(
											"vfitnesstracker"
										);
										modalBG.style.display = "none";
										fitnesstrackerModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="vbudgettracker" className="modal-card">
						<div className="visual">
							<img src={budgetTracker} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Budget Tracker</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype website to track budget information, 
										which includes depositing funds, deducting funds
										as well as holding data if connection is lost.
									</li>
									<li>
										Developed with HTML5, CSS, Bootstrap,
										and React.js.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a 
								href="https://randybudgettracker.herokuapp.com/" 
								target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var budgettrackerModal = document.getElementById(
											"vbudgettracker"
										);
										modalBG.style.display = "none";
										budgettrackerModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
