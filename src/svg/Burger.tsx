interface blogo {
    width: string;
    height: string;
  }

const Burger= ({ width, height }: blogo) =>(
    <svg
              className="sm:hidden   "
              xmlns="http://www.w3.org/2000/svg"
              height={height}
              viewBox="0 0 24 24"
              width={width}
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
);

export default Burger
