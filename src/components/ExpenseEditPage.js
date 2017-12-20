import React from 'react';

const ExpenseEditPage = (props) => {
    console.log(props);
    return (
        <div>
            Oops! This is from Edit Page of ID: {props.match.params.id}
        </div>
    );
};

export default ExpenseEditPage;