import React from 'react';

const WithPlaceholder = WrappedComponent =>
    (props) => (
        <WrappedComponent
            placeholder='MonHOC'
            {...props}
        />
    )
export default WithPlaceholder;
