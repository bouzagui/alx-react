import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

function Header({ user, logout }) {
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user?.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logout}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },

  greeting: {
    marginTop: "1rem",
  },
});

// Map Redux state to component props
const mapStateToProps = (state) => ({
  user: state.user,
});

// Map the logout action creator to component props
const mapDispatchToProps = {
  logout,
};

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Header);
