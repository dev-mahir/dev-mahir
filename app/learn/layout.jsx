
import React from "react";
import LearnHeader from "../../components/Header/LearnHeader";

const LearnLayout = ({ children }) => {
	return (
        <section className="h-[90vh]">
            <LearnHeader/>
			{children}
		</section>
	);
};

export default LearnLayout;
