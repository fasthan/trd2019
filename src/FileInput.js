import React from 'react';

const FileInput = (props) => {
    const {onChange} = props;
    return (
        <div>
            <input type="file" multiple onChange={onChange}></input>
        </div>
    );
};

export default FileInput;