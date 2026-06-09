import Button from "./Button";

const header = () => {
  return (
    <>
      <nav className='d-flex justify-content-between align-items-center p-2'>
        <a className='navbar-brand text-white'>Stock Prediction Portal</a>
        <div>
          <Button text='Login' class='btn-outline-info' />
          &nbsp;
          <Button text='Register' class='btn-info' />
        </div>
      </nav>
    </>
  );
};

export default header;
