const Welcome = () => {
	return (
		<section className="page_container">
			<div className="entry_container">
				<div
					id="torn_edge_banner"
					className="torn_container torn_left torn_right"
				>
					<div></div>
					<div className="banner_text_container">
						<span className="banner_text">
							<section className="welcome">
								<h2 className="welcome_header">Welcome to the Bestiary</h2>
								<div className="welcome_body">
									<p>
										The Bestiary is designed as a compendium for cryptids.
										Cryptids are creatures of myth, legend and folklore.
									</p>
									<p>
										The purpose of the Bestiary is to serve as place of
										reference for those interested in cryptids and cryptozoology
										as well as provide a place for creatives to reference when
										working on their own projects. Whether that may be writing,
										illustration or design of game assets. The Bestiary will be
										there to provide the inspiration and information you need.
									</p>
								</div>
							</section>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
