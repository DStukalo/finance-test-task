import {
	LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { PropTypes } from 'prop-types';

export function Chart({ data }) {
	const updateData = [];

	(function concatArrayOfDates() {
		data.forEach((el, i) => {
			if (typeof el === 'string' && el.length > 0 && i !== updateData.length)updateData.push({ price: el, serial: i });
		});
	}());

	return (
		<div>
			{data.length > 0 && (
				<ResponsiveContainer width="100%" aspect={2}>
					<LineChart
						width={700}
						height={400}
						data={updateData}
						margin={{
							top: 5, right: 20, bottom: 5, left: 0,
						}}
					>
						<Line type="monotone" dataKey="price" stroke="var(--color-black-a1)" />
						<CartesianGrid stroke="var(--color-orange-a2)" strokeDasharray="5 5" />
						<XAxis
							dataKey="serial"
							tick={false}
							stroke="var(--color-orange-a2)"
						/>
						<YAxis
							tick={{
								fill: 'var(--color-black-a1)', fontFamily: 'Roboto', fontSize: '10px', fontWeight: '700',
							}}
							stroke="var(--color-orange-a2)"
							domain={[75, 300]}
						/>
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>

			)}
		</div>
	);
}

Chart.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		data: PropTypes.string,
	})),
};

Chart.defaultProps = {
	data: [],
};
