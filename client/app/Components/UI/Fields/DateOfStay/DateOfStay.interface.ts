export interface IDateOfStayProps {
	label: string
	minDate: Date
	defaultDate: Date | null
	className?: string
	value: Date | null
	onChange: (value: Date | null, keyboardInputValue?: string) => void
}
