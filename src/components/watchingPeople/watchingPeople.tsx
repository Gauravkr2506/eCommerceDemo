import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import "./watchingPeople.css";

const socket = io(
  "https://test.ejam.com?applicantAuth=cV874bxX9TmbBp2H8vsZkFaZ"
);

export default function WatchingPeople() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on("connect", () => {
      // console.log("connected");
    });
    socket.on("event", function (data) {
      // console.log(data);
    });
    socket.on("disconnect", function () {
      // console.log("disconnected");
    });

    socket.on("UPDATE_VIEWERS", (count: any) => {
      // console.log(count);
      setCount(count);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="watchingPeople">
      <div>{count} people watching</div>
    </div>
  );
}
