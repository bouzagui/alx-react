import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const style = {
    backgroundColor: '#f5f5f5ab',
  };
  
  const styleHeader = {
    backgroundColor: '#deb5b545',
  }
  return (
    <tr style={isHeader ? styleHeader : style}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} style={styleHeader}>{textFirstCell}</th>
        ) : (
          <>
            <th style={styleHeader}>{textFirstCell}</th>
            <th style={styleHeader}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};
