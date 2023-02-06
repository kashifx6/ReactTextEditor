import React from "react";

export default function Alert(props) {
  return (
    <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
       {props.alert}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}
