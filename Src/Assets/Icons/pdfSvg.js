import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {lightThemeColors} from '../../theme';

const PdfIconSvg = ({height, width, color}) => {
  const defaultWidth = width ? width : 18;
  const defaultHeight = height ? height : 18;
  const defaultColor = color ? color : lightThemeColors.red1;

  return (
    <SvgXml
      xml={`<svg width="${defaultWidth}" height="${defaultHeight}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM6.5 8.5C6.5 9.3 5.8 10 5 10H4V12H2.5V6H5C5.8 6 6.5 6.7 6.5 7.5V8.5ZM11.5 10.5C11.5 11.3 10.8 12 10 12H7.5V6H10C10.8 6 11.5 6.7 11.5 7.5V10.5ZM15.5 7.5H14V8.5H15.5V10H14V12H12.5V6H15.5V7.5ZM9 7.5H10V10.5H9V7.5ZM4 7.5H5V8.5H4V7.5Z" fill="${defaultColor}"/>
      </svg>
      
      
      
      
      
      
      
      
      
          
              
               `}
    />
  );
};

export default PdfIconSvg;