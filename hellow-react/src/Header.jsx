import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: 'Ini Judul Dari State',
      dataMakanan: props.list,
    };
    this.handlePesan = this.handlePesan.bind(this);
  }
  handlePesan(pesan){
    e.preventDefault();
    alert(pesan);
    alert("hai");
  };
  
  render() {
    return (
      <div>
        <h2>Makanan Khas Indonesia</h2>
        <h3>{this.state.judul}</h3>
        <p>Mengakses props dari App secara langsung: {this.props.list}</p>
        <p>Mengakses props dari state: {this.state.dataMakanan}</p>
        <a href="/" onClick={(e) => this.handlePesan("pesan dari Rifaldi", e)}>Halamanan header</a>
      </div>
    );
  }
}

export default Header;
