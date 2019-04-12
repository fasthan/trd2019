import React from 'react';

const PageTemplate = (props) => {
    const {children} = props
    return (
        <div>
            <h1>파일 업로드</h1>
            <div>{children}</div>
        </div>
    );
};

export default PageTemplate;