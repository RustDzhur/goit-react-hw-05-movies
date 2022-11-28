import {BackGroundPage, TextError, NavItem} from './NoFoundPage.styled'

const NoFoundPage = () => {
  return (
    <BackGroundPage>
      <TextError>Page not found</TextError>
      <TextError>ERROR 404</TextError>
      <NavItem to="/">Go to Main</NavItem>
    </BackGroundPage>
  );
};

export default NoFoundPage