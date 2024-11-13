import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import { css, StyleSheet} from 'aphrodite';

export default class BodySectionWithMarginBottom extends Component {
  styles = StyleSheet.create({
    BodySectionWithMarginBottom: {
      marginBottom: '40px',
    }
  });
  render() {
    return (
      <div className={css(this.styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
