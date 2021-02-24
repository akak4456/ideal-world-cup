import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';

class ImageList extends Component {
  state = {
    files: [],
  };
  handleDrop = (files) => {
    let fileList = this.state.files;
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      let reader = new FileReader();
      let file = files[i];
      reader.onloadend = () => {
        const newFileItem = {
          ...file,
          previewURL: reader.result,
        };
        fileList.push(newFileItem);
      };
      reader.readAsDataURL(file);
    }
    this.setState({ files: fileList });
  };
  render() {
    /*
    드래그 앤 드롭을 하면
    그림이 보이겠끔 해야 한다
    ImageListStory로 테스트해보기
    */
    return <DragAndDrop handleDrop={this.handleDrop}></DragAndDrop>;
  }
}

export default ImageList;
