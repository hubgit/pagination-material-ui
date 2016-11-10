import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const styles = {
	pagination: {
		borderTop: '1px solid rgb(224, 224, 224)'
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	elements: {
		display: 'flex',
		alignItems: 'center',
		height: 56,
		marginLeft: 16,
	}
	pageSelect: {
		marginLeft: 0,
	},
	label: {
		color: '#999',
		fontWeight: 300;,
		fontSize: 12,
	},
	select: {
		width: 100,
		textAlign: 'right',
	},
	underline: {
		display: 'none'
	}
}

class Pagination extends Component {
	static propTypes = {
		loadMoreEntries: PropTypes.func.isRequired,
		rows: PropTypes.number.isRequired,
		limit: PropTypes.number
	};

	static defaultProps = {
		rows: 0,
		limit: 10
	};

	state = {
		current: 1,
		limit: 10,
		count: 0,
		pages: [],
	};

	constructor(props) {
		super(props);

		this.handleChangeLimit = this.handleChangeLimit.bind(this);
		this.handleChangePage = this.handleChangePage.bind(this);
	}

	componentDidMount() {
		this.calculatePageCount(this.props.rows)
	}

	componentWillReceiveProps(nextProps) {
		this.calculatePageCount(nextProps.rows)
	}

	calculatePageCount(rows) {
		let {limit} = this.state,
			pages = [],
			count = Math.ceil(rows/limit);

		for (var i = 1; i <= count; i++) {
			pages.push(i);
		}

		this.setState({pages, count});
	}

	handleChangeLimit(limit) {
		this.setState({limit});
		this.calculatePageCount(this.props.rows);

		this.props.loadMoreEntries(this.state.current * limit, limit);
	}

	handleChangePage(current) {
		let { limit, count } = this.state;

		if(current < 0)
			current = 0;
		if(current > count)
			current = count;

		this.setState({current})
		this.props.loadMoreEntries(current * limit, limit);
	}

	render() {
		let { rows } = this.props,
			{ limit, current, pages, count } = this.state;


		let end = current * limit,
			start = end - limit;

		if(end > rows)
			end = rows;

		return (
			<div style={styles.pagination}>
				<div style={Object.assign({}, styles.elements, styles.pageSelect)}>
					<div style={styles.label}>Хуудас: </div>
					<SelectField 
						onChange={(e, idx, page) => this.handleChangePage(page)}
						value={current}
						style={styles.select} 
						underlineStyle={styles.underline}>
						{
							pages.map(page => (
								<MenuItem 
									primaryText={page}
									value={page} 
									key={`page-${page}`}/>
							))
						}
					</SelectField>
				</div>
				<div style={styles.elements}>
					<div style={styles.label}>1 хуудсанд харуулах: </div>
					<SelectField 
						onChange={(e, idx, limit) => this.handleChangeLimit(limit)}
						value={limit}
						style={styles.select} 
						underlineStyle={styles.underline}>
						<MenuItem value={10} primaryText="10"/>
						<MenuItem value={15} primaryText="15"/>
						<MenuItem value={20} primaryText="20"/>
					</SelectField>
				</div>
				<div style={styles.elements}>
					<div style={styles.label}>{ `${rows} бичлэгээс ${start} - ${end} харуулж байна. ` }</div>
					<IconButton 
						disabled={current === 1}
						onTouchTap={e => this.handleChangePage(current - 1)}>
						<ChevronLeft/>
					</IconButton>
					<IconButton 
						disabled={current === count}
						onTouchTap={e => this.handleChangePage(current + 1)}>
						<ChevronRight/>
					</IconButton>
				</div>
			</div>
		)
	}
}

export default Pagination;