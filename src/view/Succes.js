import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
export default class Succes extends Component {constructor(props) {
    super(props);
    this.state = {
        visible : true
    }
}

openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}

render() {
    return (
        <section>
            <h1>Succes Page</h1>
                        <Modal visible={this.state.visible} width="600" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div>
                    <h1>Selamat anda telah terdaftar !!! </h1>
                    <p>Terima kasih atas partisipasinya dengan mendaftarkan diri sebagai peserta FilaFest 2019</p>
                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close (X) </a>
                </div>
            </Modal>
        </section>
    );
}
}
