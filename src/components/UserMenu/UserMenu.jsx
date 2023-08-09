import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {
  UserMenuContainer,
  UserMenuButton,
  UserMenuParagraph,
} from './UserMenu.styled';
import { ReactComponent as Exit } from '../Icons/Icons.svg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserMenuParagraph>Welcome, {user.name}</UserMenuParagraph>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        <Exit width="30" height="30" />
      </UserMenuButton>
    </UserMenuContainer>
  );
};
