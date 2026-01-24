import React from 'react';
import './Stats.scss';

const Stats = () => {
  const statData = [
    { number: '12', label: 'Restaurants' },
    { number: '8', label: 'Experience' },
    { number: '50+', label: 'Menu' },
    { number: '200+', label: 'Clients' },
  ];

  return (
    <section className="stats-bar">
      <div className="stats-container">
        {statData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="stat-item">
              <h2 className="stat-number">{item.number}</h2>
              <p className="stat-label">{item.label}</p>
            </div>
            {/* Don't render a divider after the last item */}
            {index < statData.length - 1 && <div className="divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;