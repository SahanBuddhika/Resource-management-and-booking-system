import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { getCurrentNine, deleteAccount } from "../../actions/nineActions";
import moment from 'moment';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import format from 'date-fns/format';
import Example1 from './Example1';
import { getBookings } from "../../actions/bookingActions";
import Spinner from "../common/Spinner";


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displaySocialInputs: false,
      dayofweek: "",
      bookdate: "",
      hallname: "",

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
  }





  componentDidMount() {
    this.props.getCurrentNine()////////////////////////////////////////////////////////////////
    this.props.getBookings();

    const { handle } = this.props.match.params

    // const { handle } = this.props.match.params

    const { name, cal } = this.props.location.state

    this.setState({
      hallname: name,

      // lat: moment().format('dddd'),

    });
  }

  // componentWillReceiveProps() {
  //   this.setState({
  //     hallname: this.props.name
  //   });
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // componentWillReceiveProps(nextProps) {
  //   let socialInputs;
  //   if (nextProps.nine.nine) {
  //     const nine = nextProps.nine.nine;

  //     // const MninetotenCSV = nine.Mninetoten.join(",");
  //     const MeighttonineCSV = nine.Meighttonine.join(",");
  //     if (this.state.dayofweek == "Monday") {
  //       socialInputs = (
  //         <div>
  //           <ul className="list-group">
  //             {nine.Meighttonine.slice(0, 4).map((skill, index) => (
  //               <li key={index} className="list-group-item">
  //                 {/* <i className="fa fa-check pr-1" /> */}
  //                 {skill === "E001" ? skill : null}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       );
  //     }
  //   }
  // }

  render() {
    let eightInputs;
    let nineInputs;
    let tenInputs;
    let elevenInputs;
    let twelveInputs;
    let oneInputs;
    let twoInputs;
    let threeInputs;
    let fourInputs;
    let fiveInputs;

    let eightnine;
    let eightten;
    let eighteleven;
    let eighttwelve;
    let eightone;
    let eighttwo;
    let eightthree;
    let eightfour;

    let nineten;
    let nineeleven;
    let ninetwelve;
    let nineone;
    let ninetwo;
    let ninethree;
    let ninefour;

    let teneleven;
    let tentwelve;
    let tenone;
    let tentwo;
    let tenthree;
    let tenfour;

    let eleventwelve;
    let elevenone;
    let eleventwo;
    let eleventhree;
    let elevenfour;

    let twelveone;
    let twelvetwo;
    let twelvethree;
    let twelvefour;

    let onetwo;
    let onethree;
    let onefour;

    let twothree;
    let twofour;

    let threefour;
    let fourfive;

    let eight = false;
    let nines = false;
    let ten = false;
    let eleven = false;
    let twelve = false;
    let one = false;
    let two = false;
    let three = false;
    let four = false;
    let five = false;
    let i;


    const { nine } = this.props.nine;
    const { bookings, loading } = this.props.booking;

    let profileItems;

    // if (this.state.dayofweek == "Monday") {
    //   socialInputs = (
    //     <div>
    //       {nine.Meighttonine.slice(0, 4).map((skill, index) => (
    //         <span key={index} className="list-group-item">
    //           {/* <i className="fa fa-check pr-1" /> */}
    //           {skill === this.state.hallname ? "Avaialable" : null}
    //         </span>
    //       ))}
    //     </div>
    //   );
    // }



    if (this.state.dayofweek == "Monday") {


      for (i = 0; i <= nine.Meighttonine.length; i++) {
        if (nine.Meighttonine[i] == this.state.hallname) {
          if (bookings === null || loading) {
            eightInputs = <Spinner />;
          } else {
            let em = 0; let time = "08.00 a.m-09.00 a.m"
            if (bookings.length > 0) {
              eightInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">08.00 a.m-09.00 a.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "08.00 a.m-09.00 a.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              eight = true;
              eightInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-09.00 a.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-09.00 a.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }



        }
      }




      for (i = 0; i <= nine.Mninetoten.length; i++) {
        if (nine.Mninetoten[i] == this.state.hallname) {
          if (bookings === null || loading) {
            nineInputs = <Spinner />;
          } else {
            let em = 0; let time = "09.00 a.m-10.00 a.m";
            if (bookings.length > 0) {
              nineInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">09.00 a.m-10.00 a.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "09.00 a.m-10.00 a.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              nines = true;
              nineInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">09.00 a.m-10.00 a.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "09.00 a.m-10.00 a.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }

        }
      }


      for (i = 0; i <= nine.Mtentoeleven.length; i++) {
        if (nine.Mtentoeleven[i] == this.state.hallname) {
          if (bookings === null || loading) {
            tenInputs = <Spinner />;
          } else {
            let em = 0; let time = "10.00 a.m-11.00 a.m";
            if (bookings.length > 0) {
              tenInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">10.00 a.m-11.00 a.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "10.00 a.m-11.00 a.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              ten = true;
              tenInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">10.00 a.m-11.00 a.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "10.00 a.m-11.00 a.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }
        }
      }




      for (i = 0; i <= nine.Meleventotwelve.length; i++) {
        if (nine.Meleventotwelve[i] == this.state.hallname) {
          if (bookings === null || loading) {
            elevenInputs = <Spinner />;
          } else {
            let em = 0; let time = "11.00 a.m-12.00 p.m";
            if (bookings.length > 0) {
              elevenInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">11.00 a.m-12.00 p.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "11.00 a.m-12.00 p.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              eleven = true;
              elevenInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">11.00 a.m-12.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "11.00 a.m-12.00 p.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }
        }
      }



      for (i = 0; i <= nine.Mtwelvetoone.length; i++) {
        if (nine.Mtwelvetoone[i] == this.state.hallname) {
          if (bookings === null || loading) {
            twelveInputs = <Spinner />;
          } else {
            let em = 0; let time = "12.00 p.m-01.00 p.m";
            if (bookings.length > 0) {
              twelveInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">12.00 p.m-01.00 p.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "12.00 p.m-01.00 p.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              twelve = true;
              twelveInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">12.00 p.m-01.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "12.00 p.m-01.00 p.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }
        }
      }



      for (i = 0; i <= nine.Monetotwo.length; i++) {
        if (nine.Monetotwo[i] == this.state.hallname) {
          if (bookings === null || loading) {
            oneInputs = <Spinner />;
          } else {
            let em = 0; let time = "01.00 p.m-02.00 p.m";
            if (bookings.length > 0) {
              oneInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">01.00 p.m-02.00 p.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "01.00 p.m-02.00 p.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              one = true;
              oneInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">01.00 p.m-02.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "01.00 p.m-02.00 p.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }
        }
      }

      for (i = 0; i <= nine.Mtwotothree.length; i++) {
        if (nine.Mtwotothree[i] == this.state.hallname) {
          if (bookings === null || loading) {
            twoInputs = <Spinner />;
          } else {
            let em = 0; let time = "02.00 p.m-03.00 p.m";
            if (bookings.length > 0) {
              twoInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">02.00 p.m-03.00 p.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "02.00 p.m-03.00 p.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              two = true;
              twoInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">02.00 p.m-03.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "02.00 p.m-03.00 p.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }
        }
      }

      for (i = 0; i <= nine.Mthreetofour.length; i++) {
        if (nine.Mthreetofour[i] == this.state.hallname) {
          if (bookings === null || loading) {
            threeInputs = <Spinner />;
          } else {
            let em = 0; let time = "03.00 p.m-04.00 p.m";
            if (bookings.length > 0) {
              threeInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">03.00 p.m-04.00 p.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "03.00 p.m-04.00 p.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              three = true;
              threeInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">03.00 p.m-04.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "03.00 p.m-04.00 p.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }
        }
      }

      for (i = 0; i <= nine.Mfourtofive.length; i++) {
        if (nine.Mfourtofive[i] == this.state.hallname) {
          if (bookings === null || loading) {
            fourInputs = <Spinner />;
          } else {
            let em = 0; let time = "04.00 p.m-05.00 p.m";
            if (bookings.length > 0) {
              fourInputs = bookings.map(booking => (
                <div>
                  {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                    em = 1,
                    <table class="table table-light table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">04.00 p.m-05.00 p.m</th>
                          <td><div>
                            <Link to={{
                              pathname: './createbooking',
                              state: {
                                hallnamebook: this.state.hallname,
                                bkdate: this.state.bookdate,
                                bktime: "04.00 p.m-05.00 p.m",


                              }
                            }}>
                              Booking
                  </Link>

                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}


                </div>

              ));
            }

            if (em === 0) {
              four = true;
              fourInputs = (
                <div>
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">04.00 p.m-05.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "04.00 p.m-05.00 p.m",


                            }
                          }}>
                            Available
                      </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }
        }
      }

      if ((eight === true) && (nines === true)) {
        if (bookings === null || loading) {
          eightnine = <Spinner />;
        }
        else {
          let em = 0; let time = "08.00 a.m-10.00 a.m";
          if (bookings.length > 0) {
            eightnine = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-10.00 a.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-10.00 a.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eightnine = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">08.00 a.m-10.00 a.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "08.00 a.m-10.00 a.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        if (bookings === null || loading) {
          eightten = <Spinner />;
        }
        else {
          let em = 0; let time = "08.00 a.m-11.00 a.m";
          if (bookings.length > 0) {
            eightten = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-11.00 a.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-11.00 a.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eightten = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">08.00 a.m-11.00 a.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "08.00 a.m-11.00 a.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        if (bookings === null || loading) {
          eighteleven = <Spinner />;
        }
        else {
          let em = 0; let time = "08.00 a.m-12.00 p.m";
          if (bookings.length > 0) {
            eighteleven = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-12.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-12.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eighteleven = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">08.00 a.m-12.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "08.00 a.m-12.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        if (bookings === null || loading) {
          eighttwelve = <Spinner />;
        }
        else {
          let em = 0; let time = "08.00 a.m-01.00 p.m";
          if (bookings.length > 0) {
            eighttwelve = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-01.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-01.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eighttwelve = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">08.00 a.m-01.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "08.00 a.m-01.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        if (bookings === null || loading) {
          eightone = <Spinner />;
        }
        else {
          let em = 0; let time = "08.00 a.m-02.00 p.m";
          if (bookings.length > 0) {
            eightone = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-02.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-02.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eightone = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">08.00 a.m-02.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "08.00 a.m-02.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        if (bookings === null || loading) {
          eighttwo = <Spinner />;
        }
        else {
          let em = 0; let time = "08.00 a.m-03.00 p.m";
          if (bookings.length > 0) {
            eighttwo = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-03.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-03.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eighttwo = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">08.00 a.m-03.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "08.00 a.m-03.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        if (bookings === null || loading) {
          eightthree = <Spinner />;
        }
        else {
          let em = 0; let time = "08.00 a.m-04.00 p.m";
          if (bookings.length > 0) {
            eightthree = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 a.m-04.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-04.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eightthree = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">08.00 a.m-04.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "08.00 a.m-04.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        if (bookings === null || loading) {
          eightfour = <Spinner />;
        }
        else {
          let em = 0; let time = "08.00 a.m-05.00 p.m";
          if (bookings.length > 0) {
            eightfour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">08.00 <a href="" className="m-05"></a>.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "08.00 a.m-05.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eightfour = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">08.00 a.m-05.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "08.00 a.m-05.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((nines === true) && (ten === true)) {
        if (bookings === null || loading) {
          nineten = <Spinner />;
        }
        else {
          let em = 0; let time = "09.00 a.m-11.00 a.m";
          if (bookings.length > 0) {
            nineten = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">09.00 a.m-11.00 a.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "09.00 a.m-11.00 a.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            nineten = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">09.00 a.m-11.00 a.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "09.00 a.m-11.00 a.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        if (bookings === null || loading) {
          nineeleven = <Spinner />;
        }
        else {
          let em = 0; let time = "09.00 a.m-12.00 p.m";
          if (bookings.length > 0) {
            nineten = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">09.00 a.m-12.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "09.00 a.m-12.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            nineeleven = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">09.00 a.m-12.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "09.00 a.m-12.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        if (bookings === null || loading) {
          ninetwelve = <Spinner />;
        }
        else {
          let em = 0; let time = "09.00 a.m-01.00 p.m";
          if (bookings.length > 0) {
            ninetwelve = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">09.00 a.m-01.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "09.00 a.m-01.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            ninetwelve = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">09.00 a.m-01.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "09.00 a.m-01.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        if (bookings === null || loading) {
          nineone = <Spinner />;
        }
        else {
          let em = 0; let time = "09.00 a.m-02.00 p.m";
          if (bookings.length > 0) {
            nineone = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">09.00 a.m-02.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "09.00 a.m-02.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            nineone = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">09.00 a.m-02.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "09.00 a.m-02.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        if (bookings === null || loading) {
          ninetwo = <Spinner />;
        }
        else {
          let em = 0; let time = "09.00 a.m-03.00 p.m";
          if (bookings.length > 0) {
            ninetwo = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">09.00 a.m-03.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "09.00 a.m-03.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            ninetwo = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">09.00 a.m-03.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "09.00 a.m-03.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        if (bookings === null || loading) {
          ninethree = <Spinner />;
        }
        else {
          let em = 0; let time = "09.00 a.m-04.00 p.m";
          if (bookings.length > 0) {
            ninethree = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">09.00 a.m-04.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "09.00 a.m-04.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            ninethree = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">09.00 a.m-04.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "09.00 a.m-04.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        if (bookings === null || loading) {
          ninefour = <Spinner />;
        }
        else {
          let em = 0; let time = "09.00 a.m-05.00 p.m";
          if (bookings.length > 0) {
            ninefour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">09.00 a.m-05.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "09.00 a.m-05.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            ninefour = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">09.00 a.m-05.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "09.00 a.m-05.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }


      if ((ten === true) && (eleven === true)) {
        if (bookings === null || loading) {
          teneleven = <Spinner />;
        }
        else {
          let em = 0; let time = "10.00 a.m-12.00 p.m";
          if (bookings.length > 0) {
            ninefour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">10.00 a.m-12.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "10.00 a.m-12.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            teneleven = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">10.00 a.m-12.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "10.00 a.m-12.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        if (bookings === null || loading) {
          tentwelve = <Spinner />;
        }
        else {
          let em = 0; let time = "10.00 a.m-01.00 p.m";
          if (bookings.length > 0) {
            ninefour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">10.00 a.m-01.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "10.00 a.m-01.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            tentwelve = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">10.00 a.m-01.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "10.00 a.m-01.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        if (bookings === null || loading) {
          tenone = <Spinner />;
        }
        else {
          let em = 0; let time = "10.00 a.m-02.00 p.m";
          if (bookings.length > 0) {
            ninefour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">10.00 a.m-02.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "10.00 a.m-02.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            tenone = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">10.00 a.m-02.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "10.00 a.m-02.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        if (bookings === null || loading) {
          tentwo = <Spinner />;
        }
        else {
          let em = 0; let time = "10.00 a.m-03.00 p.m";
          if (bookings.length > 0) {
            tentwo = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">10.00 a.m-03.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "10.00 a.m-03.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            tentwo = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">10.00 a.m-03.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "10.00 a.m-03.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        if (bookings === null || loading) {
          tenthree = <Spinner />;
        }
        else {
          let em = 0; let time = "10.00 a.m-04.00 p.m";
          if (bookings.length > 0) {
            tenthree = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">10.00 a.m-04.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "10.00 a.m-03.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            tenthree = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">10.00 a.m-04.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "10.00 a.m-04.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        if (bookings === null || loading) {
          tenfour = <Spinner />;
        }
        else {
          let em = 0; let time = "10.00 a.m-05.00 p.m";
          if (bookings.length > 0) {
            tenfour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">10.00 a.m-05.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "10.00 a.m-05.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            tenfour = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">10.00 a.m-05.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "10.00 a.m-05.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }


      if ((eleven === true) && (twelve === true)) {
        if (bookings === null || loading) {
          eleventwelve = <Spinner />;
        }
        else {
          let em = 0; let time = "11.00 a.m-01.00 p.m";
          if (bookings.length > 0) {
            eleventwelve = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">11.00 a.m-01.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "11.00 a.m-01.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eleventwelve = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">11.00 a.m-01.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "11.00 a.m-01.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        if (bookings === null || loading) {
          elevenone = <Spinner />;
        }
        else {
          let em = 0; let time = "11.00 a.m-02.00 p.m";
          if (bookings.length > 0) {
            elevenone = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">11.00 a.m-02.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "11.00 a.m-02.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            elevenone = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">11.00 a.m-01.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "11.00 a.m-02.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        if (bookings === null || loading) {
          eleventwo = <Spinner />;
        }
        else {
          let em = 0; let time = "11.00 a.m-03.00 p.m";
          if (bookings.length > 0) {
            eleventwo = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">11.00 a.m-03.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "11.00 a.m-03.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eleventwo = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">11.00 a.m-03.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "11.00 a.m-03.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        if (bookings === null || loading) {
          eleventhree = <Spinner />;
        }
        else {
          let em = 0; let time = "11.00 a.m-04.00 p.m";
          if (bookings.length > 0) {
            eleventhree = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">11.00 a.m-04.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "11.00 a.m-04.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            eleventhree = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">11.00 a.m-04.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "11.00 a.m-04.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        if (bookings === null || loading) {
          elevenfour = <Spinner />;
        }
        else {
          let em = 0; let time = "11.00 a.m-05.00 p.m";
          if (bookings.length > 0) {
            elevenfour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">11.00 a.m-05.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "11.00 a.m-05.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            elevenfour = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">11.00 a.m-05.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "11.00 a.m-05.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }


      if ((twelve === true) && (one === true)) {
        if (bookings === null || loading) {
          twelveone = <Spinner />;
        }
        else {
          let em = 0; let time = "12.00 a.m-02.00 p.m";
          if (bookings.length > 0) {
            twelveone = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">12.00 a.m-02.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "12.00 a.m-02.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            twelveone = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">12.00 a.m-02.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "12.00 a.m-02.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        if (bookings === null || loading) {
          twelvetwo = <Spinner />;
        }
        else {
          let em = 0; let time = "12.00 a.m-03.00 p.m";
          if (bookings.length > 0) {
            twelvetwo = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">12.00 a.m-03.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "12.00 a.m-03.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            twelvetwo = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">12.00 a.m-03.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "12.00 a.m-03.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        if (bookings === null || loading) {
          twelvethree = <Spinner />;
        }
        else {
          let em = 0; let time = "12.00 a.m-04.00 p.m";
          if (bookings.length > 0) {
            twelvethree = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">12.00 a.m-04.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "12.00 a.m-04.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            twelvethree = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">12.00 a.m-04.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "12.00 a.m-04.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        if (bookings === null || loading) {
          twelvefour = <Spinner />;
        }
        else {
          let em = 0; let time = "12.00 a.m-05.00 p.m";
          if (bookings.length > 0) {
            twelvefour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">12.00 a.m-05.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "12.00 a.m-05.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            twelvefour = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">12.00 a.m-05.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "12.00 a.m-05.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((one === true) && (two === true)) {
        if (bookings === null || loading) {
          onetwo = <Spinner />;
        }
        else {
          let em = 0; let time = "01.00 p.m-03.00 p.m";
          if (bookings.length > 0) {
            onetwo = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">01.00 p.m-03.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "01.00 p.m-03.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            onetwo = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">01.00 p.m-03.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "01.00 p.m-03.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((one === true) && (two === true) && (three === true)) {
        if (bookings === null || loading) {
          onethree = <Spinner />;
        }
        else {
          let em = 0; let time = "01.00 p.m-04.00 p.m";
          if (bookings.length > 0) {
            onethree = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">01.00 p.m-04.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "01.00 p.m-04.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            onethree = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">01.00 p.m-04.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "01.00 p.m-04.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        if (bookings === null || loading) {
          onefour = <Spinner />;
        }
        else {
          let em = 0; let time = "01.00 p.m-05.00 p.m";
          if (bookings.length > 0) {
            onefour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">01.00 p.m-05.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "01.00 p.m-05.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            onefour = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">01.00 p.m-05.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "01.00 p.m-05.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }


      if ((two === true) && (three === true)) {
        if (bookings === null || loading) {
          twothree = <Spinner />;
        }
        else {
          let em = 0; let time = "02.00 p.m-04.00 p.m";
          if (bookings.length > 0) {
            twothree = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">02.00 p.m-04.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "02.00 p.m-04.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            twothree = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">02.00 p.m-04.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "02.00 p.m-04.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }

      if ((two === true) && (three === true) && (four === true)) {
        if (bookings === null || loading) {
          twofour = <Spinner />;
        }
        else {
          let em = 0; let time = "02.00 p.m-05.00 p.m";
          if (bookings.length > 0) {
            twofour = bookings.map(booking => (
              <div>
                {(this.state.hallname === booking.hallname) && (this.state.bookdate === booking.bookdate) && (time === booking.booktime) ? (
                  em = 1,
                  <table class="table table-light table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">02.00 p.m-05.00 p.m</th>
                        <td><div>
                          <Link to={{
                            pathname: './createbooking',
                            state: {
                              hallnamebook: this.state.hallname,
                              bkdate: this.state.bookdate,
                              bktime: "02.00 p.m-05.00 p.m",


                            }
                          }}>
                            Booking
                </Link>

                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}


              </div>

            ));
          }

          if (em === 0) {

            twofour = (
              <div>
                <table class="table table-light table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">02.00 p.m-05.00 p.m</th>
                      <td><div>
                        <Link to={{
                          pathname: './createbooking',
                          state: {
                            hallnamebook: this.state.hallname,
                            bkdate: this.state.bookdate,
                            bktime: "02.00 p.m-05.00 p.m",


                          }
                        }}>
                          Available
                    </Link>

                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


    }

    if (this.state.dayofweek == "Tuesday") {
      let i;

      for (i = 0; i <= nine.Teighttonine.length; i++) {
        if (nine.Teighttonine[i] == this.state.hallname) {
          eight = true;
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "08.00 a.m-09.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Tninetoten.length; i++) {
        if (nine.Tninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ttentoeleven.length; i++) {
        if (nine.Ttentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "10.00 a.m-11.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Televentotwelve.length; i++) {
        if (nine.Televentotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ttwelvetoone.length; i++) {
        if (nine.Ttwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Tonetotwo.length; i++) {
        if (nine.Tonetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ttwotothree.length; i++) {
        if (nine.Ttwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Tthreetofour.length; i++) {
        if (nine.Tthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Tfourtofive.length; i++) {
        if (nine.Tfourtofive[i] == this.state.hallname) {
          four = true;
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

    }

    if (this.state.dayofweek == "Wenesday") {
      let i;

      for (i = 0; i <= nine.Weighttonine.length; i++) {
        if (nine.Weighttonine[i] == this.state.hallname) {
          eight = true;
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "08.00 a.m-09.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wninetoten.length; i++) {
        if (nine.Wninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wtentoeleven.length; i++) {
        if (nine.Wtentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "010.00 a.m-11.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Weleventotwelve.length; i++) {
        if (nine.Weleventotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wtwelvetoone.length; i++) {
        if (nine.Wtwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wonetotwo.length; i++) {
        if (nine.Wonetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wtwotothree.length; i++) {
        if (nine.Wtwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wthreetofour.length; i++) {
        if (nine.Wthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Wfourtofive.length; i++) {
        if (nine.Wfourtofive[i] == this.state.hallname) {
          four = true;
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


    }

    if (this.state.dayofweek == "Thursday") {
      let i;

      for (i = 0; i <= nine.THeighttonine.length; i++) {
        if (nine.THeighttonine[i] == this.state.hallname) {
          eight = true;
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "08.00 a.m-09.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THninetoten.length; i++) {
        if (nine.THninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THtentoeleven.length; i++) {
        if (nine.THtentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "10.00 a.m-11.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THeleventotwelve.length; i++) {
        if (nine.THeleventotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THtwelvetoone.length; i++) {
        if (nine.THtwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THonetotwo.length; i++) {
        if (nine.THonetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THtwotothree.length; i++) {
        if (nine.THtwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THthreetofour.length; i++) {
        if (nine.THthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.THfourtofive.length; i++) {
        if (nine.THfourtofive[i] == this.state.hallname) {
          four = true;
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

    }

    if (this.state.dayofweek === "Friday") {
      let i;

      for (i = 0; i <= nine.Feighttonine.length; i++) {
        if (nine.Feighttonine[i] == this.state.hallname) {
          eight = true;
          eightInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">08.00 a.m-09.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "08.00 p.m-09.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Fninetoten.length; i++) {
        if (nine.Fninetoten[i] == this.state.hallname) {
          nines = true;
          nineInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">09.00 a.m-10.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "09.00 a.m-10.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ftentoeleven.length; i++) {
        if (nine.Ftentoeleven[i] == this.state.hallname) {
          ten = true;
          tenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">10.00 a.m-11.00 a.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "10.00 a.m-11.00 a.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Feleventotwelve.length; i++) {
        if (nine.Feleventotwelve[i] == this.state.hallname) {
          eleven = true;
          elevenInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">11.00 a.m-12.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "11.00 a.m-12.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ftwelvetoone.length; i++) {
        if (nine.Ftwelvetoone[i] == this.state.hallname) {
          twelve = true;
          twelveInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">12.00 p.m-01.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "12.00 p.m-01.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Fonetotwo.length; i++) {
        if (nine.Fonetotwo[i] == this.state.hallname) {
          one = true;
          oneInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01.00 p.m-02.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "01.00 p.m-02.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ftwotothree.length; i++) {
        if (nine.Ftwotothree[i] == this.state.hallname) {
          two = true;
          twoInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">02.00 p.m-03.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "02.00 p.m-03.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Fthreetofour.length; i++) {
        if (nine.Fthreetofour[i] == this.state.hallname) {
          three = true;
          threeInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">03.00 p.m-04.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "03.00 p.m-04.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      for (i = 0; i <= nine.Ffourtofive.length; i++) {
        if (nine.Ffourtofive[i] == this.state.hallname) {
          four = true;
          fourInputs = (
            <div>
              <table class="table table-light table-striped">
                <tbody>
                  <tr>
                    <th scope="row">04.00 p.m-05.00 p.m</th>
                    <td><div>
                      <Link to={{
                        pathname: './createbooking',
                        state: {
                          hallnamebook: this.state.hallname,
                          bkdate: this.state.bookdate,
                          bktime: "04.00 p.m-05.00 p.m"

                        }
                      }}>
                        Available
                      </Link>

                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      }

      if ((eight === true) && (nines === true)) {
        eightnine = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-10.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-10.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true)) {
        eightten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-11.00 a.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true)) {
        eighteleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 p.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        eighttwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        eightone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eighttwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eightthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eight === true) && (nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        eightfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">08.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "08.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true)) {
        nineten = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-11.00 a.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-11.00 a.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true)) {
        nineeleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true)) {
        ninetwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        nineone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        ninetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        ninethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((nines === true) && (ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        ninefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">09.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "09.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((ten === true) && (eleven === true)) {
        teneleven = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-12.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-12.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true)) {
        tentwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true)) {
        tenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        tentwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        tenthree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((ten === true) && (eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        tenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">10.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "10.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((eleven === true) && (twelve === true)) {
        eleventwelve = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-01.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-01.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true)) {
        elevenone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true)) {
        eleventwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true)) {
        eleventhree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((eleven === true) && (twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        elevenfour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">11.00 a.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "11.00 a.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((twelve === true) && (one === true)) {
        twelveone = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-02.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-02.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true)) {
        twelvetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true)) {
        twelvethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((twelve === true) && (one === true) && (two === true) && (three === true) && (four === true)) {
        twelvefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">12.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "12.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true)) {
        onetwo = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-03.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-03.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true)) {
        onethree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((one === true) && (two === true) && (three === true) && (four === true)) {
        onefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">01.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "01.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((two === true) && (three === true)) {
        twothree = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-04.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-04.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      if ((two === true) && (three === true) && (four === true)) {
        twofour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">02.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "02.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


      if ((three === true) && (four === true)) {
        threefour = (
          <div>
            <table class="table table-light table-striped">
              <tbody>
                <tr>
                  <th scope="row">03.00 p.m-05.00 p.m</th>
                  <td><div>
                    <Link to={{
                      pathname: './createbooking',
                      state: {
                        hallnamebook: this.state.hallname,
                        bkdate: this.state.bookdate,
                        bktime: "03.00 p.m-05.00 p.m"

                      }
                    }}>
                      Available
                      </Link>

                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }


    }



    const options = [
      { label: "* Select Day", value: 0 },
      { label: "Monday", value: "Monday" },
      { label: "Tuesday", value: "Tuesday" },
      { label: "Wenesday", value: "Wenesday" },
      { label: "Thursday", value: "Thursday" },
      { label: "Friday", value: "Friday" }
    ];

    let item1;
    item1 = (
      <div>
        <Example1 hallname1={this.state.hallname} dayofweek1={this.state.dayofweek} bookdate1={this.state.bookdate} />
      </div>
    );

    return (
      <div className="Example">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 style">
              <form onSubmit={this.onSubmit}>
                {/* <h1>{this.state.lat}</h1> */}

                <h6>You Selected Hall</h6>
                <TextFieldGroup
                  placeholder=""
                  name="hallname"
                  value={this.state.hallname}
                  onChange={this.onChange}
                />
                <h6>Put Your Booking Date</h6>


                <InfiniteCalendar
                  onSelect={date =>
                    this.setState({
                      bookdate: format(date, 'YYYY/MM/DD'),
                      dayofweek: format(date, 'dddd')
                    })
                  }

                />
                <TextFieldGroup
                  placeholder=""
                  name="dayofweek"////////////////////////////////////////////////////////////////////////
                  value={this.state.dayofweek}
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder=""
                  name="bookdate"////////////////////////////////////////////////////////////////////////
                  value={this.state.bookdate}
                  onChange={this.onChange}
                />
                {/* <SelectListGroup
                  placeholder=""
                  name="dayofweek"
                  value={this.state.dayofweek}
                  onChange={this.onChange}
                  options={options}
                />  */}
              </form>
            </div>
            <div className="col-sm-1 style"></div>
            {/* <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div> */}
            <div className="col-sm-4 style">
              <div className="card card-body bg-light mb-3">


                {eightInputs}
                {eightnine}
                {eightten}
                {eighteleven}
                {eighttwelve}
                {eightone}
                {eighttwo}
                {eightthree}
                {eightfour}

                {nineInputs}
                {nineten}
                {nineeleven}
                {ninetwelve}
                {nineone}
                {ninetwo}
                {ninethree}
                {ninefour}

                {tenInputs}
                {teneleven}
                {tentwelve}
                {tenone}
                {tentwo}
                {tenthree}
                {tenfour}

                {elevenInputs}
                {eleventwelve}
                {elevenone}
                {eleventwo}
                {eleventhree}
                {elevenfour}

                {twelveInputs}
                {twelveone}
                {twelvetwo}
                {twelvethree}
                {twelvefour}

                {oneInputs}
                {onetwo}
                {onethree}
                {onefour}

                {twoInputs}
                {twothree}
                {twofour}

                {threeInputs}
                {threefour}
                {fourInputs}
              </div>
            </div>

            {/* <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                /> */}
          </div>
        </div>
      </div>
    );
  }
}

Example.propTypes = {
  getCurrentNine: PropTypes.func.isRequired,
  getBookings: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
  nine: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  nine: state.nine,
  booking: state.booking

});

export default connect(
  mapStateToProps,
  { getCurrentNine, getBookings }
)(withRouter(Example));
