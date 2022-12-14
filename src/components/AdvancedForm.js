import { useNavigate, Link, Outlet } from "react-router-dom";

const AdvancedForm = () => {
  const array = { lo: [30, 50] };

  console.log(array.lo[1]);

  const push = useNavigate();
  return (
    <>
      <form autoComplete="off">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Enter your username" />
      </form>
      <h1 onClick={() => push("/BasicForm")}>goback</h1>
      <Link to="Contant">Contant</Link>
      <Outlet />
    </>
  );
};
export default AdvancedForm;
