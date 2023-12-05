import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatList,
  Item,
  Label,
  Percentage,
  Title,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map(stat => {
          let randomColor = Math.floor(Math.random() * 16777215).toString(16);

          return (
            <Item key={stat.id} style={{ backgroundColor: `#${randomColor}` }}>
              <Label> {stat.label}</Label>
              <Percentage> {stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
