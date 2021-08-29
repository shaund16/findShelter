import '../../styles/dashboard/Header.scss';

interface Props {
  currentMenu: string;
}

const Header = (props: Props) => {
  return (
    <header className='dashboard-header'>
      <h1>{props.currentMenu}</h1>
      <span className='dashboard-right-header'>
        <img src='/img/search.svg' alt='search' />
        <img src='/img/divider.svg' alt='divider' />
        <h3>Staff User</h3>
        <img src='/img/familyfriends-avatar.png' alt='logo' />
      </span>

    </header>
  );
};

export default Header;
