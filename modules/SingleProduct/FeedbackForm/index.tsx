"use client"
import {useState} from "react";

export const FeedbackForm = () => {
	const [message, setMessage] = useState('');

	const onFormSubmit = (e:any) => {
		e.preventDefault()

		//TODO: add send
	}

	return(
		<form
			onSubmit={(e) => onFormSubmit(e)}
			className="w-full"
		>
			<textarea
				className="w-full min-h-[120px] border-2 border-gold p-2 text-sm text-gray-light-2 mt-2 resize-none"
				placeholder="Enter your message here..."
				onChange={(e) => setMessage(e.target.value)}
			></textarea>
			<button className="button-small mt-4 w-full">Write a review</button>
		</form>
	)
}