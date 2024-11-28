import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import "./BodySection.css";
import { css, StyleSheet} from 'aphrodite';

export default class BodySectionWithMarginBottom extends Component {
  styles = StyleSheet.create({
    BodySectionWithMarginBottom: {
      marginBottom: '40px',
    }
  });
  render() {
    return (
      <div className={css(this.styles.BodySectionWithMarginBottom)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
