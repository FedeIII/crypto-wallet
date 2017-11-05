import {connect} from 'react-redux';

import {CryptoWallet} from 'components/cryptoWallet';
import {BTC, ETH, LTC} from 'src/constants';

function mapStateToProps (state) {
    return state[BTC];
}


const CryptoWalletContainer = connect(mapStateToProps, null)(CryptoWallet);

export default CryptoWalletContainer;
