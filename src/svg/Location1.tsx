interface lologo{
  width:string;
  heigth :string;
}

const Location1 = ({width,heigth}:lologo)=>(
  <svg
  version="1.2"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 9 13"
  width={width}
  height={heigth}
>
  <defs>
    <image
      width="9"
      height="13"
      id="img1"
      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAMAAABM3rQ0AAAAAXNSR0IB2cksfwAAAGxQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg+zge4AAAACR0Uk5TAGPN789me/+CJM56ySqI8u6MrOqrkq5VqZQzOtTaQcwZHIqkWqYkmwAAAFhJREFUeJwtzEcOgDAMRNGBABN6r6Fz/zviBP7CepItA/B8FYSQIto0EJNJmpE5CpayqFijoRK17NCTwziRMxZ+GWB12OTEOO32obzgYYFTdDlB88bfY8cL8FwDwfAFjb8AAAAASUVORK5CYII="
    />
  </defs>
  <style></style>
  <use href="#img1" x="0" y="0" />
</svg>
); 
 
export default Location1