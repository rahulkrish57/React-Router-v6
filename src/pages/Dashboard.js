const Dashboard = ({user}) => {
  console.log(user)
  return (
    <section className='section'>
      {/* <h4>{`Hello, ${user.name}`}</h4> */}
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
