import React, { useState, useEffect } from 'react';
import { getHomeAction } from '../Reusable/Action/HomeAction';
import { connect } from 'react-redux';

function Home(props) {
  const { getHomeAction, homeDetails } = props;

  useEffect(() => {
    getHomeAction();
  }, [])


  return (
    <div className="h-full m-20">
      <div className="mt-10 px-4">
        {homeDetails && homeDetails.map(titleItem => (
          <p key={titleItem._id} className="text-gray-600 font-bold text-1xl text-justify">{titleItem.title}</p>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    homeDetails: state.home.home,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeAction: () => {
      dispatch(getHomeAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
