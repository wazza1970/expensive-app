import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p>This is privet info</p>}
            <WrappedComponent {...props}/>
        
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
            <WrappedComponent {...props} />) :(<p>Please login</p>)}
        
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} info='These are the details' />, document.getElementById('app'));

ReactDom.render(<AuthInfo isAuthenticated={true} info='These are the details' />, document.getElementById('app'));