interface elogo{
    width:string;
    heigth :string;
  }

const Elipss = ({width,heigth}:elogo)=>(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px"
    fill="#d9a520"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
  </svg>
);

  

export default Elipss