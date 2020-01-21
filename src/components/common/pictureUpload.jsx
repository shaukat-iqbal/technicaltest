import React from "react";
import "./pictureUpload.css";
const PictureUpload = ({
  onChange,
  name,
  label,
  value,
  error,
  onRemove,
  disabled,
  ...rest
}) => {
  let classes = "d-flex flex-column justify-content-center pl-2";

  return (
    <div className="file-field d-flex justify-content-center">
      <div>
        <div className="d-flex justify-content-center">
          <div className="imageViewer">
            <label
              className=" mx-auto d-block "
              htmlFor="fileInput"
              style={{ cursor: "pointer" }}
            >
              <img
                src={value ? value : require("../../resources/img/add.png")}
                height="130px"
                width="130px"
                className="rounded-circle"
                alt="Paste logo here"
              />
              <input
                disabled={disabled}
                id="fileInput"
                name={name}
                type="file"
                className="d-none"
                onChange={onChange}
                {...rest}
              />
            </label>
          </div>
          <div className={!disabled ? classes : "d-none"}>
            <span
              className=" p-1 rounded-circle "
              style={{ cursor: "pointer", fontSize: "12px" }}
              onClick={onRemove}
            >
              <i className="fa fa-2x fa-remove"></i>
            </span>
            <label
              className="p-1 rounded-circle "
              htmlFor="fileInput"
              style={{ cursor: "pointer", fontSize: "12px" }}
            >
              <i className="fa fa-2x fa-plus"></i>
            </label>
          </div>
        </div>
      </div>

      {error && <div className="mt-1 alert alert-danger">{error}</div>}
    </div>
  );
};

export default PictureUpload;
