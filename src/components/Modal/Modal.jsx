import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';
let instance = '';

export default class Modal extends Component {
  componentDidMount(prevProps, prevState) {
    window.addEventListener('keydown', this.clickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEsc);
  }
  clickEsc = event => {
    if (event.code === 'Escape') {
      this.props.hideModal();
      instance.close();
    }
  };
  showModal = () => {
    const { largeImg } = this.props;
    instance = basicLightbox.create(
      ` <div class="overlay">
      <div class="modal">
      <img src=${largeImg.img} alt=${largeImg.tags} />
      </div>
    </div>`
    );
    instance.show();
  };

  render() {
    this.showModal();

    return;
  }
}
Modal.propTypes = {
  largeImg: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  isShowModal: PropTypes.bool.isRequired,
};
