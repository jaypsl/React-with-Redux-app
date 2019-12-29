import React, { Component } from "react";
import PreviewImage from "./components/PreviewImage";
import ListImages from "./components/ListImages";
import { connect } from "react-redux";
import { getAllImages, uploadImage } from "./actions/action";
import Footer from "./components/Footer";
import "./index.css";

class App extends Component {
  state = {
    selectedImage: {},
    header: "Technical Exercise",
    footer: "Build By: Jay Solanki",
    pictures: []
  };

  componentDidMount() {
    this.props.getAllImages();
  }

  onSelectImage = image => {
    this.setState({ selectedImage: image });
  };
  onDrop = e => {
    const files = Array.from(e.target.files);

    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(i, file);
    });
    this.props.uploadImage(formData);
  };

  render() {
    const { imageList } = this.props;
    const { selectedImage, header, footer } = this.state;
    return (
      <div>
        <Footer text={header} />
        <div className="main">
          <ListImages
            imageList={imageList}
            onSelectImage={this.onSelectImage}
            onDrop={this.onDrop}
          />
          <PreviewImage
            selectedImage={selectedImage}
            onSelectImage={this.onSelectImage}
          />
        </div>
        <Footer text={footer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imageList: state.Reducer.imageList || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllImages: () => dispatch(getAllImages()),
    uploadImage: formData => dispatch(uploadImage(formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
