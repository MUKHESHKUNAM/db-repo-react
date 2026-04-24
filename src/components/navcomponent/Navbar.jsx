import "../navcomponent/Navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav id="head">
        <div>
          <img
            src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
            alt=""
          />
        </div>
        <div id="headop">
          <div>
            <p>Docs</p>
          </div>
          <div>
            <p>About</p>
          </div>
          <div>
            <button>SUPPORT US</button>
          </div>
        </div>
      </nav>
    </>
  );
};
