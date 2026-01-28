import React from 'react';
import './Terms.scss';

const Terms = () => {
  const rules = [
    "Ordering from this site is complete. You must pass a live registration to use communications.",
    "Orders cannot be canceled once payment is made. Please check your order before paying.",
    "Writing or distributing personal advertisements is prohibited without admin permission.",
    "All actions are monitored by the restaurant administration. Please follow the general rules."
  ];

  return (
    <section className="terms-container">
      <div className="terms-card">
        <ul className="terms-list">
          {rules.map((rule, index) => (
            <li key={index} className="terms-item">
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Terms;