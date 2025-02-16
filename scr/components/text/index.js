import React from 'react';
import { Text as NativeText } from 'react-native';

function Text(props) {
  return <NativeText {...props} style={{ fontSize: 12, fontWeight: '400', ...props.style }} />;
}

export function Title(props) {
  return <Text {...props} style={{ fontSize: 14, fontWeight: '700', ...props.style }} />;
}

export function TitleSecondary(props) {
  return <Text {...props} style={{ fontSize: 16, fontWeight: '700', ...props.style }} />;
}

export function Paragraph(props) {
  return <Text {...props} style={{ color: '#9C9C9C', ...props.style }} />;
}

export default Text;
