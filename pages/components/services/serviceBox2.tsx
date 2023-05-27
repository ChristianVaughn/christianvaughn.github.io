import React from "react";
import { useSelector } from "react-redux";
import { IServiceBox } from "../../../typescript/interfaces/service.interface";
import { IDefaultReducer } from "../../redux/store";

const ServiceBox: React.FC<IServiceBox> = (props) => {
  const { isLight } = useSelector((state: IDefaultReducer) => state.AppReducer);
  return (
    <div className={`service border-radius-6x ${isLight ? 'bg-white' : 'bg-dark'}`}>
      <div className="media">
        <div className="icon theme-soft-bg rounded-circle me-15">
          <i className={`${props?.icon} theme-color`}></i>
        </div>
        <div className="media-body">
          <h5 className="mt-0">{props?.title}</h5>
          <p className="mb-0">{props?.text?.substring(0, 75)}</p>
        </div>
      </div>
    </div>
  )
}

ServiceBox.displayName = "Service Box";
export default ServiceBox;