import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avarage(data) {
  return _.round(_.sum(data) / data.length);
}

const Chart = props => {
  const { data, color, unit } = props;
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine mean="avg" />
      </Sparklines>
      <div>
        {avarage(data)}
        {unit}
      </div>
    </div>
  );
};

export default Chart;
