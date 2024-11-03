"use client";

import React from "react";
import ContactRight from "./ContactRight";
import ContactLeft from "./ContactLeft";

const Contact = () => {
	return (
		<section className="container">
			<div className="py-14" id="contact">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 md:gap-x-5 gap-y-20 items-center">
					<ContactLeft />
					<ContactRight />
				</div>
			</div>
		</section>
	);
};

export default Contact;
