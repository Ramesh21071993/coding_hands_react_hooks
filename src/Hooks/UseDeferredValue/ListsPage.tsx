import React, { memo } from "react";

const ListsItem = ({ query }: { query: string }) => {

  const startTime = performance.now();

  while(performance.now() - startTime < 1) {
    //
  }

  return (
    <>
      <div>{query}</div>
    </>
  );
};


const ListsPage = ({ query }: { query: string }) => {

  let items = [];
  for(let i = 0; i < 100; i++) {
    items.push(<ListsItem key={i} query={query} />)
  }

  return (
    <>
      {
        items
      }
    </>
  );
};

export default memo(ListsPage);
