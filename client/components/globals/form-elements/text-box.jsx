/**
 * A generic text box.
 */
TextBox = React.createClass({
	propTypes: {
		/**
		 * The `id` of the textbox.
		 */
		id: React.PropTypes.string,
		/**
		 * A `placeholder` for the textbox.
		 */
		placeholder: React.PropTypes.string,
		/**
		 * The current `value` of the textbox. This is
		 * required because without it, the textbox will
		 * never display anything.
		 */
		text: React.PropTypes.string.isRequired,
		/**
		 * A function to handle the `onChange` event triggered
		 * when the textbox is typed in. This will usually update
		 * `this.props.text`.
		 */
		onChange: React.PropTypes.func.isRequired,
	},
	getDefaultProps() {
		return {
			id: 'text',
			placeholder: 'Enter some text'
		};
	},
	render() {
		return (
			<input
				type="text"
				className="form-control"
				id={this.props.id}
				placeholder={this.props.placeholder}
				value={this.props.text}
				onChange={this.props.onChange} />
		);
	}
});