import * as React from 'react';
import { style, classes, keyframes } from 'typestyle';
import { VlLogoGrey, VlLogoRed } from 'app/colors';

const spanBeforeAnimation = keyframes({
  '0%': {
    transform: 'translate(-50%, -1.4rem)',
  },
  '40%': {
    transform: 'translate(-50%, 0)',
  },
  '60%': {
    transform: 'translate(-50%, 0)',
  },
  '100%': {
    transform: 'translate(-50%, 0) rotate(45deg)',
  },
});
const spanAfterAnimation = keyframes({
  '0%': {
    transform: 'translate(-50%, 1.4rem)',
  },
  '40%': {
    transform: 'translate(-50%, 0)',
  },
  '60%': {
    transform: 'translate(-50%, 0)',
  },
  '100%': {
    transform: 'translate(-50%, 0) rotate(-45deg)',
  },
});
const spanBeforeBackAnimation = keyframes({
  '0%': {
    transform: 'translate(-50%, 0) rotate(45deg)',
  },
  '40%': {
    transform: 'translate(-50%, 0)',
  },
  '60%': {
    transform: 'translate(-50%, 0)',
  },
  '100%': {
    transform: 'translate(-50%, -1.4rem)',
  },
});
const spanAfterBackAnimation = keyframes({
  '0%': {
    transform: 'translate(-50%, 0) rotate(-45deg)',
  },
  '40%': {
    transform: 'translate(-50%, 0)',
  },
  '60%': {
    transform: 'translate(-50%, 0)',
  },
  '100%': {
    transform: 'translate(-50%, 1.4rem)',
  },
});
const buttonStyle = style({
  height: '5.5rem',
  width: '5.5rem',
  border: 'none',
  fontSize: 0,
  padding: 0,
  $nest: {
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      background: 'rgba(0,0,0,0.05)',
    },
    '&:active': {
      background: 'rgba(0,0,0,0.1)',
    },
  },
});
const spanDefaultStyle = style({
  height: '0.1rem',
  width: '5rem',
  margin: '0 auto',
  display: 'block',
  background: VlLogoGrey,
  position: 'relative',
  $nest: {
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '0%',
      left: '50%',
      width: '100%',
      height: '0.1rem',
      background: VlLogoGrey,
      transition: 'transform 0.35s',
      transformOrigin: '50% 0',
    },
    '&:before': {
      transform: 'translate(-50%, -1.4rem)',
    },
    '&:after': {
      transform: 'translate(-50%, 1.4rem)',
    },
  },
});
const toggleOnSpanStyle = style({
  background: 'transparent',
  $nest: {
    '&:before': {
      background: VlLogoRed,
      animation: `${spanBeforeAnimation} 0.5s forwards`,
    },
    '&:after': {
      background: VlLogoRed,
      animation: `${spanAfterAnimation} 0.5s forwards`,
    },
  },
});
const toggleOffSpanStyle = style({
  $nest: {
    '&:before': {
      animation: `${spanBeforeBackAnimation} 0.5s forwards`,
    },
    '&:after': {
      animation: `${spanAfterBackAnimation} 0.5s forwards`,
    },
  },
});

interface IMenuButtonProps {
  isToggled: boolean;
  hasMenuBeenToggled: boolean;
  onClick: () => void;
}

export const MenuButton = (props: IMenuButtonProps) => {
  const spanStyle = classes(
    spanDefaultStyle,
    props.isToggled && toggleOnSpanStyle,
    !props.isToggled && props.hasMenuBeenToggled && toggleOffSpanStyle,
  );
  return (
    <button name='toggleMenu'
      className={buttonStyle}
      onClick={props.onClick}>
      <span className={spanStyle}>Valmynd</span>
    </button>
  );
};
