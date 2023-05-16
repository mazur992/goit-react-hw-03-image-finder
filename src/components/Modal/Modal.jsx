import * as basicLightbox from 'basiclightbox';

export default function Modal(props) {
  console.log(props.largeImg);
  const instance = basicLightbox.create(
    ` <div class="overlay">
      <div class="modal">
        <img src=${props.largeImg} alt="" />
      </div>
    </div>`
  );

  instance.show();
}
