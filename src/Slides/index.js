import React from 'react';
import TitleSlide from './TitleSlide';
import StoringDataProblems from './StoringDataProblems';
import UsingReduxAsDataStore from './UsingReduxAsDataStore/UsingReduxAsDataStore';
import FlatteningTheData from './FlatteningTheData/FlatteningTheData';

export default [
    <TitleSlide key="title"/>,
    <StoringDataProblems key="first"/>,
    <UsingReduxAsDataStore key="UsingReduxAsDataStore"/>,
    <FlatteningTheData key="flatteningTheData"/>
];
