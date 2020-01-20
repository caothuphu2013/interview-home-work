import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Skeleton } from 'antd';

const withInfiniteScroll = (WrapperComponent) => {
  class wrapperWithInfiniteScroll extends Component {
    constructor(props) {
      super(props);
      this.state = {
        numberItems: 1,
        hasMoreItems: true
      };
    }

    loadMore = () => {
      if (this.state.numberItems === 100) {
        this.setState({ hasMoreItems: false });
      } else {
        setTimeout(() => {
          this.setState({ numberItems: this.state.numberItems + 1 });
        }, 2000);
      }
    };

    render() {
      return (
        <InfiniteScroll loadMore={this.loadMore} hasMore={this.state.hasMoreItems} loader={<Skeleton active />} useWindow={false}>
          <WrapperComponent numberItems={this.state.numberItems} />
        </InfiniteScroll>
      );
    }
  }
  return wrapperWithInfiniteScroll;
};

export default withInfiniteScroll;
