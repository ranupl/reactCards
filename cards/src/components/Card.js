import React from "react";
import { TbTriangleFilled } from "react-icons/tb";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { TbTriangleInverted } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";

const Card = ({ data, index, length }) => {
  return (
    <div>
      {index % 2 == 0 ? (
        <div className="cardContainer">
          <div className="innerContainer">
            <div className="box">
              <h5>{data.heading}</h5>
              <p>{data.paragraph}</p>
            </div>
          </div>
          <div className="iconsContainer">
            <span className="icon1">
              {index == length - 1 ? (
                <FaRegCircle />
              ) : (
                <TbTriangleInvertedFilled />
              )}
            </span>
            <span className="icon2">
              {index === 0 ? <TbTriangleInverted /> : <TbTriangleFilled />}
            </span>
          </div>
          <div className="imgContainer">
            <img
              src={data.imageURL}
              alt=""
              width="170px"
              height="100px"
              className="img-org"
            />
            <div className="indexContainer">
              <span className="index">{index + 1}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="cardContainer">
          <div className="imgContainer-rev">
            <span className="lastIndexIcon">
              {index == length - 1 && <FaRegCircle />}
            </span>
            <img
              src={data.imageURL}
              alt=""
              width="170px"
              height="100px"
              className="rev-img"
            />
            <div className="indexContainer">
              <span className="index-rev">{index + 1}</span>
            </div>
          </div>

          <div className="innerContainer">
            <div className="box-rev">
              <h5>{data.heading}</h5>
              <p>{data.paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
