import React, { Component } from "react";
import PreviewImage from "./components/PreviewImage";
import ListImages from "./components/ListImages";
import { connect } from "react-redux";
import { getAllImages, uploadImage } from "./actions/action";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

class App extends Component {
  state = {
    selectedImage: {},
    header: "Technical Exercise",
    footer: "Built By: Jay Solanki"
  };

  componentDidMount() {
    this.props.getAllImages();
  }

  onSelectImage = image => {
    this.setState({ selectedImage: image });
  };
  onDrop = e => {
    const files = e.target.files;

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "jaypsl");
    this.props.uploadImage(formData);
  };

  render() {
    const { imageList } = this.props;
    const { selectedImage, header, footer } = this.state;
    return (
      <div>
        <Header text={header} />
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
