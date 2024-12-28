import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const DefaultBtn = (props) => {
  return (
    <>
      <Stack spacing={2} direction="row" className='w-full flex flex-row justify-start items-center !bg-slate-200 !shadow !rounded-md hover:!bg-slate-300'>
          <Button
          className='!w-full !h-full !p-0 !py-2 !border-hidden !rounded-md hover:!bg-inherit focus:bg-inherit'
          variant="outlined"
          onClick={props.onClick}>
              <Link className='!w-full !h-full !font-Urbanist !text-xl !uppercase !text-black/80 max-sm:!text-xl' to={props.path}>
                {props.name}
              </Link>
          </Button>
      </Stack>
    </>
  );
}

export default DefaultBtn;