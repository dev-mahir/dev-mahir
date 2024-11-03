import { useState, useRef, useEffect } from "react";

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const modalRef = useRef();

	const handleToggle = (e) => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event) => {
		if (modalRef?.current && !modalRef?.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return [isOpen, modalRef, handleToggle];
};

export default useModal;
