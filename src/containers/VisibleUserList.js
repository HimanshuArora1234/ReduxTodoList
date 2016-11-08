import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { fetchUsers } from '../actions';

const mapStateToProps = (state) => ({
  users: state.users ? state.users.users : []
});

const mapDispatchToProps =  ({
  onLoadUsersClick: fetchUsers
});

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default VisibleUserList;
