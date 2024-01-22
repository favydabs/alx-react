import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from "prop-types";
import CourseShape from './CourseShape';
import {  StyleSheet, css } from 'aphrodite';


const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" cellPadding="0" className={css(courseListStyles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
};
const courseListStyles = StyleSheet.create({
	table: {
		display: 'table',
		border: '1px solid',
		borderCollapse: 'collapse',
		margin: '2rem auto 0 auto',
		width: '90%',
	}
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
