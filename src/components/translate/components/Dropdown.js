import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		// assign the function to a const to be able to refer it
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false)
		};

		document.body.addEventListener('click', onBodyClick);

		/**
		 * ensures the event listener won't exists if element
		 * isn't shown anymore. This avoids errors on
		 * ref.current === null
		 */
		return () => {
			document.body.removeEventListener('click', onBodyClick);
		}
	}, []);

	const selectOption = (option) => {
		onSelectedChange(option);
		setOpen(false);
	}

	const renderedOptions = options.map((option) => {
		if (selected.value === option.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className="dropdown-item"
				onClick={() => selectOption(option)}>
				{option.label}
			</div>
		);
	});

	return (
		<React.Fragment>
			<h4 className="text-center py-2">{label}</h4>
			<div ref={ref} className="dropdown">
				<button
					className="btn btn-outline-secondary btn-block dropdown-toggle"
					type="button"
					data-toggle="dropdown"
					onClick={() => setOpen(!open)}
				>
					{selected.label}
				</button>
				<div
					className={`dropdown-menu text-center ${open ? 'd-block' : ''}`}
					style={{ cursor: 'pointer', width: '100%' }}
				>
					{renderedOptions}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dropdown;