import React, { useContext } from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";
import { connect } from "react-redux";

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <>
      <div className="App-footer">
        {user.isLoggedIn && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps)(Footer);
