import {connect} from 'react-redux';
import {CryptoWallet} from 'components/cryptoWallet';

function mapStateToProps (state) {
    return state;
}


const CryptoWalletContainer = connect(mapStateToProps, null)(CryptoWallet);

export default CryptoWalletContainer;
