import { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import Api from '../servises/api';

import css from './App.module.css';
export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    isLoading: false,

    largeImg: { img: '', alt: '' },
    isShowModal: false,
  };
  incrementPage = () => {
    const { page } = this.state;
    this.setState({ page: Number([page]) + 1 });
  };
  onSubmit = async data => {
    this.setState({ images: [], search: data, page: 1 });
  };
  addLargeImg = (img, tags) => {
    this.setState({ largeImg: { img: img, tags: tags } });
  };
  showModal = () => {
    this.setState({ isShowModal: true });
  };
  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.search !== prevState.search ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });
      const { search } = this.state.search;
      try {
        const api = await Api(search, this.state.page);
        this.setState(prevState => ({
          images: [...prevState.images, { images: api }],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className={css.app}>
        <Searchbar
          onSubmit={this.onSubmit}
          isSubmiting={this.state.isLoading}
        />
        <ImageGallery>
          <ImageGalleryItem
            cards={this.state.images}
            showModal={this.showModal}
            addLargeI={this.addLargeImg}
          />
        </ImageGallery>
        <Loader loading={this.state.isLoading} />
        <Button props={this.state} incrementPage={this.incrementPage} />
        {this.state.isShowModal && (
          <Modal largeImg={this.state.largeImg} hideModal={this.hideModal} />
        )}
      </div>
    );
  }
}
