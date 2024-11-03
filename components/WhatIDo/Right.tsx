"use client";

const Right = () => {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:items-center">
				<div className="row-span-2">
					<div className="bg-dark_blue rounded-md flex items-center px-5 py-5 md:px-2  gap-5 md:gap-1 mb-5 md:mb-5">
						<div>
							<i className=" ri-repeat-line text-light_red text-6xl"></i>
						</div>
						<div>
							<h4 className="text-white font-bold text-lg">
								Website redesign
							</h4>
						</div>
					</div>
					<div className="bg-dark_blue rounded-md flex items-center px-5 py-5 md:px-2  gap-5 md:gap-1  md:mb-0">
						<div>
							<i className="ri-window-line  text-light_red text-6xl"></i>
						</div>
						<div>
							<h4 className="text-white font-bold text-lg">
								Full website creation
							</h4>
						</div>
					</div>
				</div>
				<div className="lg:row-span-2">
					<div className="bg-dark_blue rounded-md flex items-center px-5 py-5 md:px-2  gap-5 md:gap-1">
						<div>
							<i className=" ri-error-warning-line text-light_red text-6xl"></i>
						</div>
						<div>
							<h4 className="text-white font-bold text-lg">
								Fixing problems
							</h4>
						</div>
					</div>
				</div>
				<div className="lg:row-span-2">
					<div className="bg-dark_blue rounded-md flex items-center px-5 py-5 md:px-2  gap-5 md:gap-1 ">
						<div>
							<i className=" ri-smartphone-line text-light_red text-6xl"></i>
						</div>
						<div>
							<h4 className="text-white font-bold text-lg">
								Mobile app
							</h4>
						</div>
					</div>
				</div>
				<div className="lg:row-span-2 mt-0 md:-mt-32">
					<div className="bg-dark_blue rounded-md flex items-center px-5 py-5 md:px-2  gap-5 md:gap-1 ">
						<div>
							<i className=" ri-store-2-line text-light_red text-6xl"></i>
						</div>
						<div>
							<h4 className="text-white font-bold text-lg">
								Online store & shopping
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Right;
