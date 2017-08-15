import React, { Component } from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats'

class App extends Component {

    constructor() {
        super();
        
        this.state = {
            newDate: '',
            birthday: '1989-03-10',
            showStats: false
        }

        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleClickBirthday = this.handleClickBirthday.bind(this)
    }

    handleChangeDate(e) {
        this.setState({
            newDate: e.target.value,
        });
    }

    handleClickBirthday(e) {
        this.setState({
            birthday: this.state.newDate,
            showStats: true
        })
    }

    render() {
        return <div className="App">
            <h2>Masukkan Tanggal Lahir</h2>
            <Form inline>
              <FormControl type="date" onChange={this.handleChangeDate} /> <Button onClick={this.handleClickBirthday}>Hitung</Button>
                {this.state.showStats ?
                  <div className="fade age-stats">
                    <AgeStats date={this.state.birthday} />
                    </div> :
                    <div />
                }
            </Form>
          </div>;
    }
}

export default App;