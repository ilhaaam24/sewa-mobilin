import React from "react";

const MyBtn = ({ textContent }) => {
	return (
		<div className={"btn btn-primary cursor-pointer hover:ring-2 hover:ring-[var(--accent)] hover:ring-offset-2"}>
			{textContent}
		</div>
	);
};

export default MyBtn;
