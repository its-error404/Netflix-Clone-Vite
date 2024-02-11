import React from 'react'

type Props = {
    title?: string;
}

const Row = (props: Props) => {
  return (
    <div>
        <h2>{props.title}</h2>
    </div>
  )
}

export default Row