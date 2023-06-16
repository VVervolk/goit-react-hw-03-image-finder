import { ButtonLoadMore } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { getImages } from 'services/getImages';
import { List } from './ImageGallery.styled';
import { Oval } from 'react-loader-spinner';
import ModalImage from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    checkedImage: null,
    showModal: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ page: 1, isLoading: true }, () => {
        getImages(this.props.request)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            if (data.hits.length === 0) {
              throw new Error('Search not found');
            }
            this.setState({
              images: data.hits,
              isLoading: false,
            });
          })
          .catch(error => {
            console.error(error);
          });
      });
    }
  }

  loadMore = () => {
    this.setState({ page: this.state.page + 1, isLoading: true }, () => {
      getImages(this.props.request, this.state.page)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          if (data.hits.length === 0) {
            throw new Error('Search not found');
          }
          this.setState({
            images: [...this.state.images, ...data.hits],
            isLoading: false,
          });
        })
        .catch(error => {
          console.error(error);
        });
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        {isLoading && (
          <Oval
            className="spinner"
            height={80}
            width={80}
            color="#3f51b5"
            wrapperStyle={{
              position: 'fixed',
              top: '38%',
              left: '47%',
            }}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#ffffff0"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
        <List>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              onClick={e =>
                this.setState({
                  checkedImage: e.target.dataset.modalimage,
                  showModal: true,
                })
              }
              key={id}
              src={webformatURL}
              alt={tags}
              largeImage={largeImageURL}
            ></ImageGalleryItem>
          ))}
        </List>
        {images.length !== 0 && (
          <ButtonLoadMore onClick={this.loadMore}></ButtonLoadMore>
        )}
        {this.state.showModal && (
          <ModalImage>
            <img src={this.state.checkedImage} alt="large" />
          </ModalImage>
        )}
      </>
    );
  }
}
