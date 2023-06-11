import React from "react";

type Props = {};

const AddItemModal = (props: Props) => {
	return (
		<div className="fixed w-screen h-screen bg-gray-800 flex items-center justify-center">
			<div className="bg-gray-600 rounded-md w-[500px] px-5 py-8">
				<form action="">
					<div className="mb-4">
						<label className="relative h-12 items-center text-light_gray">
							<input
								type="text"
								name=""
								placeholder="Type url as 'logo'"
								className="bg-dark_blue w-full rounded-md h-full px-5 outline-none placeholder:text-light_gray"
							/>
						</label>
					</div>

					<div>
						<label className="relative h-12 items-center text-light_gray">
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="bg-dark_blue w-full rounded-md h-full px-5 outline-none placeholder:text-light_gray"
							/>
						</label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddItemModal;
