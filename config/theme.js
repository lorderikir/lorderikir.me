import { darken, lighten } from 'polished'
import { fonts } from '../src/lib/typography'

const brand = {
  primary: '#05233f',
  //primary: '#5348FF',
  //primary: '#1ABC9C',
  //primary: '#D42210',
  //primary: '#D96E0E',
  //primary: '#9B59B6',
  //primary: '#6420E5',
  secondary: '#fcfacf',
}

const colors = {
  primary_light: `${lighten(0.75, brand.primary)}`,
  blog_header: '#05233f',
  gray: '#92a2b2',
  black: '#000',
  white: '#fff',
  bg_color: '#fafafa',
  body_color: 'rgba(0,0,0,0.85)',
  link_color: brand.primary,
  link_color_hover: `${darken(0.07, brand.primary)}`,
  red: '#E86C60',
  green: '#29B573',
}

const theme = {
  colors,
  fonts,
  brand,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  transition: {
    ease: 'all 200ms ease',
  },
}

export default theme
