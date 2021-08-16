import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOff.svg'
import { StyledIcon } from '../UI';

const light = <StyledIcon src={ThemeOn} alt = "Light Theme"/>
const dark = <StyledIcon src={ThemeOff} alt = "Dark Theme"/>

export default ({ theme }) => (theme ? dark : light);