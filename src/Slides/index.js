import React from 'react';
import TitleSlide from './TitleSlide';
import StoringDataProblems from './StoringDataProblems';
import CentralizedStore from './CentralizedStore';
import CraftingYourStore from './CraftingYourStore';
import AntiCorruptionLayer from './AntiCorruptionLayer';
import CachingData from './CachingData';

export default [
    <TitleSlide key="title"/>,
    <StoringDataProblems key="first"/>,
    <CentralizedStore key="centralized"/>,
    <CraftingYourStore key="crafting"/>,
    <AntiCorruptionLayer key="ACL"/>,
    <CachingData key="caching"/>
];
