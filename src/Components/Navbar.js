function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" to="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" to="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div
            class={`custom-control custom-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              type="checkbox"
              class="custom-control-input"
              onClick={props.toggleMode}
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1">
              {props.modeText}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
