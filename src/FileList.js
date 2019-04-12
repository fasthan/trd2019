import React, { Component } from 'react';
import FileItem from './FileItem';

class FileList extends Component {

    render() {
        const {files, delFile, uploadFile} = this.props;
        const fileItems = files.map(file => {
            const {id, fname, fsize, blob, loaded} = file;
            return <FileItem 
                        key={id} id={id} 
                        fname={fname} 
                        fsize={fsize} 
                        blob={blob} 
                        loaded={loaded}
                        onDelete={delFile}
                        onUpload={uploadFile}

                    ></FileItem>
        })
        return (
            <div>
                {fileItems}
            </div>
        );
    }
}

export default FileList;