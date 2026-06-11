import Button from "./Button";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <nav className='d-flex justify-content-between align-items-center p-2'>
        <Link className='navbar-brand text-white' to={"/"}>
          Stock Prediction Portal
        </Link>
        <div>
          <Button text='Login' class='btn-outline-info' url='/login' />
          &nbsp;
          <Button text='Register' class='btn-info' url='/register' />
        </div>
      </nav>
    </>
  );
};

export default header;
