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
      fileList.push(files[i]);
    }
    this.setState({ files: fileList });
  };
  render() {
    /*
    드래그 앤 드롭을 하면
    그림이 보이겠끔 해야 한다
    ImageListStory로 테스트해보기
    */
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{ height: 300, width: 250 }}>
          {this.state.files.map((file, idx) => {
            var reader = new FileReader();
            reader.onload = (function (f, i) {
              return function (e) {};
            })(file, idx);
          })}
        </div>
      </DragAndDrop>
    );
  }
}

export default ImageList;
