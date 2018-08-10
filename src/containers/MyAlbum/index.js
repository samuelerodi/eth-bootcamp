/*
 * AboutPage
 */

import React from 'react';
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components';
import { drizzleConnect } from 'drizzle-react';
import PropTypes from 'prop-types';

import Header from '../../components/Sticker';


class MyAlbumPage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
   constructor(props, context) {
    super(props);
    this.contracts = context.drizzle.contracts
  }
  componentDidMount() { }
  render() {
    return (
      <div>
        This is my album section
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    ZtickyZtorage: state.contracts.ZtickyZtorage,
    ZtickyCoinZ: state.contracts.ZtickyCoinZ,
    ZtickerZ: state.contracts.ZtickerZ,
    drizzleStatus: state.drizzleStatus
  }
}

MyAlbumPage.contextTypes = {
  drizzle: PropTypes.object
}
const MyAlbumContainer = drizzleConnect(MyAlbumPage, mapStateToProps);
export default MyAlbumContainer;
