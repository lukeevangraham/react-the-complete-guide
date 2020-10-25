import React, { Component } from "react";

class Course extends Component {
  state = {
    selectedCourseId: null,
    selectedCourseTitle: null,
  };
  componentDidMount() {
    this.setState({
      selectedCourseId: this.props.match.params.id,
      selectedCourseTitle: this.props.match.params.title,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.selectedCourseTitle}</h1>
        <p>You selected the Course with ID: {this.state.selectedCourseId}</p>
      </div>
    );
  }
}

export default Course;
