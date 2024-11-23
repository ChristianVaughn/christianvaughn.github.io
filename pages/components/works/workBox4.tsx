import React from "react";
import { imagePath } from "../../../custom.config";
import {
  EProjectType,
  IPortoflio,
} from "../../../typescript/interfaces/gallery.interface";

type IClassMapper = {
  [key in EProjectType]: string;
};
const classMapper: IClassMapper = {
  JAVASCRIPT: "bg-soft-success",
  PYTHON: "bg-soft-warning",
  CPP: "bg-soft-primary",
  OTHER: "bg-soft-warning",
  TYPESCRIPT: "bg-soft-primary",
};

interface IWorkBox extends IPortoflio {
  isLight: boolean;
}

const WorkBox: React.FC<IWorkBox> = (props) => {
  return (
    <div
      className={`card shadow border-radius-2x border-0 mt-15 bg-${!props?.isLight ? "dark" : "white"}`}
    >
      <div className="card-body">
        <div className="media align-items-center mb-15">
          <div
            className={`avatar avatar-xl border-radius-1x ${classMapper[props?.type]}`}
          >
            <img
              src={imagePath + "/logos/" + props?.img}
              alt=""
              className="thumb-md"
            />
          </div>
          <div className="media-body ms-3">
            <h5 className="mb-1 text-uppercase">{props?.title}</h5>
            <p className="mb-0 fs-13">
              <a
                href={props?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                {props?.altLink}
              </a>
              {props.link && (
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  <i className="bx bx-link-external theme-color align-middle fs-18"></i>
                </a>
              )}
            </p>
          </div>
        </div>
        {props?.tags?.map((item: string, idx: number) => (
          <span
            className="badge bage-lg me-2 text-teal text-uppercase fs-12 fw-normal bg-soft-teal"
            key={idx}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

WorkBox.displayName = "Work Box 3";
export default WorkBox;
