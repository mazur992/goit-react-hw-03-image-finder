import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Api from '../servises/api';
export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    isLoading: false,
  };
  incrementPage = () => {
    const { page } = this.state;
    this.setState({ page: Number([page]) + 1 });
  };
  onSubmit = async data => {
    this.setState({ images: [], search: data, page: 1 });
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
        setTimeout(() => {
          this.setState(prevState => ({
            images: [...prevState.images, { images: api }],
          }));
        }, 1500);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2000);
      }
    }
  }
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Searchbar
          onSubmit={this.onSubmit}
          isSubmiting={this.state.isLoading}
        />
        <ImageGallery>
          <ImageGalleryItem cards={this.state.images} />
        </ImageGallery>
        <Loader loading={this.state.isLoading} />
        <Button props={this.state} incrementPage={this.incrementPage} />
        <Modal />
      </div>
    );
  }
}
