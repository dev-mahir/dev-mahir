import React from 'react'

type Props = {
	children: React.ReactNode;
};

const Template = ({children}: Props) => {
  return (
      <div>{children}</div>
  )
}

export default Template