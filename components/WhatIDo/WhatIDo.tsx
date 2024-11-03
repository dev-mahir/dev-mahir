"use client";

import React from "react";
import Right from "./Left";
import Left from "./Right";

const WhatIDo = () => {
	return (
		<div className="py-10" id="services">
			<div className="container gap-y-10 grid  grid-cols-1 md:grid-cols-2 gap-x-10 items-center">
				<div className="order-2">
					<Left />
				</div>
				<div>
					<Right />
				</div>
			</div>
		</div>
	);
};

export default WhatIDo;
