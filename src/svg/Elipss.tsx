interface elogo{
    width:string;
    heigth :string;
  }

const Elipss = ({width,heigth}:elogo)=>(
    <svg
            xmlns="http://www.w3.org/2000/svg"
            height={heigth}
            viewBox="0 0 24 24"
            width={width}
            fill="#d9a520"
          >
            <path d="M24 24H0V0h24v24z" fill="none" />
            <circle cx="12" cy="12" r="8" />
          </svg>
);

  

export default Elipss