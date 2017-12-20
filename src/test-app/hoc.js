// Higer Order Component (HOC) - A component that renders another component
// Reause code
// Render hijacking
// Prop Manipulation
// Abstract State

import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don not share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Login...</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="nothing" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="nothing" />, document.getElementById('app'));