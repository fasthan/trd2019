import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import FileInput from './FileInput';
import FileList from './FileList';

class App extends Component {
 
    state = {
        files : []
    }

    id=1

    getID = () => this.id++

    handleChange = (e) => {
        const fileList = e.target.files;
        const fileArray = [...fileList];
        const newFiles = fileArray.map(fileObj => {
            const {name,size} = fileObj;
            return { id:this.getID(), fname:name, fsize:size, blob:fileObj, loaded:0 }
        })
        console.log(newFiles);
        this.setState({
            files : [
                ...this.state.files,
                ...newFiles
            ]
        })
    }

    handleDelete = (id) => {
        this.setState({
            files : [
                ...this.state.files.filter(file => file.id !== id)
            ]
        })
    }

    handleUpload = (id) => {
        const fileObj = this.state.files.find(file => file.id === id);
        const newObj = {...fileObj};
        const {fname,blob} = fileObj;
        const url = 'http://localhost:3001/uploadFile/' + fname;
        const request = new XMLHttpRequest();
        request.open('POST', url);
        request.setRequestHeader('Content-Type', 'application/octet-stream');
        request.upload.addEventListener('progress', (evt) => {
           const loaded = evt.loaded;
           newObj.loaded = loaded;
           const index = this.state.files.findIndex(file => file.id === id);
           this.setState({
               files :[
                   ...this.state.files.slice(0,index),
                   newObj,
                   ...this.state.files.slice(index+1, this.state.files.length)
               ]
           })  
        });
        request.send(blob)
    }

    render() {
        return (
            <PageTemplate>
                <FileInput onChange={this.handleChange}></FileInput>
                <FileList 
                    files={this.state.files} 
                    delFile={this.handleDelete}
                    uploadFile={this.handleUpload}
                ></FileList>
            </PageTemplate>
        );
    }
}

export default App;