import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div>
            <h2>This is terms condition</h2>
            <span>Go to back <Link to='/register'>Condition</Link></span>
         </div>
    );
};

export default TermsCondition;