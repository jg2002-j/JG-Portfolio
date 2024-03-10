import React from "react";
import dayjs from "dayjs";

function CurrentTime() {

	const currentTime = dayjs().format("HH:mm:ss");
	const [ time, setTime ] = React.useState(currentTime);

	const updateTime = () => {
		setTime(dayjs().format("HH:mm:ss"))
	}

	setInterval(updateTime,1000)

  	return time
};

export default CurrentTime;