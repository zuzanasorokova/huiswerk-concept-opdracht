import React from 'react';

const amountWithPoint = (amount) => {
    return (Math. round(amount * 100) / 100). toLocaleString()

};

export default amountWithPoint;