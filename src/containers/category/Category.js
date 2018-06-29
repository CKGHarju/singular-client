import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Hero, BulmaBoiler, TagCloud, ActivityList } from '../../components/'

import './Category.css';
import pathParser from '../../services/pathparser'
import categoryId from '../../services/categoryId'
import { fetchSkillsActionCreator } from '../../store/actions/actions';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialize: false,
    }
  }

  componentWillMount() {
    if (this.props.categories.status === 200 && this.props.userLocation.status === 200 && !this.state.initialize) this.initialize();
  }

  componentDidUpdate() {
    if (this.props.categories.status === 200 && this.props.userLocation.status === 200 && !this.state.initialize) this.initialize();
  }

  initialize = async () => {
    this.setState({initialize: true})
    const categoryName = await pathParser(this.props.location.pathname);
    if (!categoryName.first) return;
    this.setState({category: categoryName.first});
    const categoryID = await categoryId(this.props.categories.body, categoryName.first);
    this.props.genreSkills(this.props.userLocation, categoryID)
  }

  filterList = (event) => {
    // make spinner loader appear
    event.currentTarget.classList.add('is-loading');
    const deleteButton = Array.prototype.slice.call(document.querySelectorAll('.delete'), 0);
    console.log(deleteButton);
    // .classList.remove('is-hidden');
    let updatedList = this.props.skills.body;

    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    console.log(updatedList.length);
    this.setState({filteredList: {
      status: 200,
      body: updatedList
    }});
    event.currentTarget.classList.remove('is-loading');
  }

  clearSearch = (event) => {
    // clear search in box
    console.log(event.target);
  }

  render () {
    console.log('skills: ', this.props.skills);
    return (
      <div>
        <section className="section is-center has-stroke-bottom has-half-padding-bottom">
          <div className="container">
            <p> Put your dance shoes on!</p>
            <h1 className="title is-capitalized">
              {this.state.category}
            </h1>
          </div>
        </section>
        <ActivityList skills={this.state.filteredList || this.props.skills}>
          <div className="field">
              <div className="control has-icons-right is-medium"
                onChange={(e) => this.filterList(e)}>
                <input type="search" className="input is-medium" type="email" placeholder="Search for a tag, name or person" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <a onClick={(e) => this.clearSearch(e)} className="delete is-small is-hidden"></a>
                </span>
              </div>
          </div>
          <p className="subtitle">
            See whats´s offered in {this.props.userLocation.status === 200 && this.props.userLocation.body.city}
          </p>
        </ActivityList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLocation: state.location,
  categories: state.categories,
  skills: state.genreSkills
});

const mapDispatchToProps = (dispatch) => ({
  genreSkills: (userLocation, category) => dispatch(fetchSkillsActionCreator(userLocation, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
