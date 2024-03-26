import React from "react";

function RepeatTextBG(props) {

	const text = props.text;
	const repeats = props.repeats;

	const bgText = (text, repeats) => {
      let finalArray = []
      let lettersArray = text.split("")

      for (let i = 0; i < repeats; i++) {
         lettersArray.forEach(letter => {
            finalArray.push(letter)
         });
      }

      return(finalArray.map((letter, index) => (<span key={index} className="mx-1 font-title text-8xl ghosttext">{letter}</span>)))
   }


  	return (
		<div className="absolute -top-5 -left-5 w-[120%] h-full -z-10 flex flex-wrap justify-start items-start transpdivtb">
			{bgText(text, repeats)}
		</div>
  	)
};

export default RepeatTextBG;