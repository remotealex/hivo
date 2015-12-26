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
		 * Any modifier classes to be applierd to
		 * the input.
		 */
		modClass: React.PropTypes.string,
		/**
		 * A function to handle the `onKeyUp` event.
		 * Useful for use when closing overlays etc.
		 */
		onKeyUp: React.PropTypes.func,
		/**
		 * A function to handle the `onChange` event triggered
		 * when the textbox is typed in. This will usually update
		 * `this.props.text`.
		 */
		onChange: React.PropTypes.func.isRequired
	},
	getDefaultProps() {
		return {
			id: 'text',
			placeholder: 'Enter some text'
		};
	},

	render() {
		let cls = this.props.modClass ? `input ${this.props.modClass}` : 'input';
		return (
			<input
				type="text"
				className={cls}
				id={this.props.id}
				placeholder={this.props.placeholder}
				value={this.props.text}
				onKeyUp={this.props.onKeyUp}
				onChange={this.props.onChange} />
		);
	}
});
