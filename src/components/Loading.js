import React from 'react';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";


export const Loading = ({ status }) => {

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #282C34;
  `;

  return (
    <div className="sweet-loading">
      <PuffLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading={status}
      />
    </div>
  )
}
