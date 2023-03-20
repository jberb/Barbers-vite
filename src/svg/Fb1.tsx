interface fblogo {
    width: string;
    height: string;
  }

const Fb1 = ({ width, height }: fblogo) =>(
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7 13"
      width={width}
      height={height}
    >
      <defs>
        <image
          width="7"
          height="13"
          id="img10"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAMAAABSF4SHAAAAAXNSR0IB2cksfwAAAGZQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgdCtPDAAAACJ0Uk5TAE/Q8faUD/+5M7hLLRlaZ7zWrqNMmb1/LAxjMnw2hi/ydlOv21MAAABHSURBVHicbck1AoAwAMXQoB8v7lLuf0nanSxvCBCEUZxAKlcGuVSUFdRSA5hW6npD6LcGxkmalxU2aXefQzr/vKTb+1j7wgea5wOH3hSuAAAAAABJRU5ErkJggg=="
        />
      </defs>
      <style></style>
      <use href="#img10" x="0" y="0" />
    </svg>
);

export default Fb1