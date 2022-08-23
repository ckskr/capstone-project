import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

const StyledInput = styled.textarea`
	display: flex;
	flex-wrap: wrap;
	width: 400px;
	height: 100px;
	margin: 30px 0;
	padding: 10px;
	border: 1px solid var(--rose);
	border-radius: 5px;
	color: var(--turq);
`;

const StyledCard = styled.p`
	display: flex;
	flex-direction: column-reverse;
	width: 800px;
	border: 1px solid var(--turq_light);
	border-radius: 5px;
`;

const StyledLi = styled.li`
	display: flex;
	flex-direction: column;
	margin: 0 15px 10px 15px;
	color: var(--turq_light);
	gap: 50px;
`;

export default function Form2() {
	const [inputValue, setInputValue] = useState();
	const [entries, setEntries] = useState([]);
	return (
		<>
			<div>
				{/* FORM */}

				<div>
					<div>
						<form
							onSubmit={event => {
								event.preventDefault();
								setEntries([
									...entries,
									{colorCode: inputValue, edit: false, id: nanoid()},
								]);
								setInputValue('');
							}}
							name="EntryForm"
						>
							<StyledInput
								id="firstEntry"
								name="firstEntry"
								required
								value={inputValue}
								onChange={event => {
									setInputValue(event.target.value);
								}}
								type="text"
							/>
							<StyledInput
								id="secondEntry"
								name="secondEntry"
								required
								value={inputValue}
								onChange={event => {
									setInputValue(event.target.value);
								}}
								type="text"
							/>
							<button>Add</button>
						</form>
					</div>
				</div>
				{/* FORM END */}
				{/* Render Created Cards */}

				<h3>Your Entries</h3>
				<div>
					{entries.map(color => {
						return (
							<div key={color.id} style={{backgroundColor: color.colorCode}}>
								<div>
									{/* Display Color Hex and Copy */}
									<StyledCard>
										<StyledLi>{color.colorCode}</StyledLi>
									</StyledCard>
									{/* EDIT COLOR HEX */}

									<div key={color.id}>
										{color.edit ? (
											<input
												type="text"
												value={color.colorCode}
												onChange={event => {
													setEntries(
														entries.map(newColor => {
															return newColor.id === color.id
																? {
																		...newColor,
																		colorCode:
																			event.target.value,
																  }
																: newColor;
														})
													);
												}}
											/>
										) : (
											''
										)}

										<button
											type="button"
											onClick={() => {
												setEntries(
													entries.map(newColor => {
														return newColor.id === color.id
															? {...newColor, edit: !newColor.edit}
															: newColor;
													})
												);
											}}
										>
											{color.edit ? 'save' : 'edit'}
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
