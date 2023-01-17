import { appColors } from '../../theme/appColors';

import background from '../../assets/background/background.svg';

export const loginContainer = {
  height: '100vh',
};

export const leftPanel = {
  padding: '4em 5em',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

export const rightPanel = {
  backgroundColor: appColors.darkPink,
  backgroundImage: `url(${background})`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'contain',
};

export const imagePanel = {
  width: '15em',
};

export const h1Props = {
  margin: 0,
  color: appColors.lightPurple,
  marginTop: '1em',
  textAlign: 'center',
};

export const h2Props = {
  margin: 0,
  color: appColors.lightPurple,
  marginBottom: '2em',
  textAlign: 'center',
};
