import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEsc);
  }
  clickEsc = event => {
    if (event.code === 'Escape') {
      this.props.hideModal();
    }
  };
  render() {
    const { largeImg } = this.props;
    const instance = basicLightbox.create(
      ` <div class="overlay">
      <div class="modal">
      <img src=${largeImg.img} alt=${largeImg.tags} />
      </div>
    </div>`
    );
    instance.show();

    return;
  }
}
Modal.propTypes = {
  largeImg: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
};
