import React, { Component } from 'react';

class FileItem extends Component {
    render() {
        console.log(this.props)
        const {id,fname,fsize,onDelete,loaded,onUpload} = this.props;
        return (
            <div key={id}>
                {id} : 
                {fname} : 
                {fsize} : 
                <span onClick={()=>onDelete(id)}>삭제</span> :
                <span onClick={()=>onUpload(id)}>업로드</span> :
                {loaded}
            </div>
        ); 
    }
}

export default FileItem;