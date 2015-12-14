/**
 * A single anxiety hierarchy entry
 */
AnxietyHierarchyTableEntry = React.createClass({
	propTypes: {
		/**
		 * The text for this entry.
		 */
		text: React.PropTypes.string.isRequired,
		/**
		 * The number between 0 and 100 representing the percentage
		 * rating for this entry.
		 */
		percentage: React.PropTypes.number.isRequired,
		/**
		 * Event handler for an edit entry event.
		 */
		handleEdit: React.PropTypes.func.isRequired
	},
	/**
	 * Envoke the edit handler for entries. Passing
	 * the current entry up the component hierarchy.
	 */
	handleEdit(event) {
		this.props.handleEdit(
			event,
			{
				text: this.props.text,
				percentage: parseInt(this.props.percentage)
			}
		);
	},
	render() {
		return (
			<div
				href="#"
				className="alert alert-info clearfix"
				style={{display: 'block'}}>

				<span className="pull-left">

					{this.props.text}

					{' '}

					<a href="#" onClick={this.handleEdit}>
						<Icon icon={'pencil'} />
					</a>

					{' '}

					<a href="#">
						<Icon icon={'trash'} />
					</a>
				</span>

				<span className="pull-right">
					{this.props.percentage}%
				</span>

			</div>
		);
	}
});