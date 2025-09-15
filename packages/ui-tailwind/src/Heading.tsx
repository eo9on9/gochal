import { PropsWithChildren } from "react";

export const Heading = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-2 text-2xl font-semibold bg-blue-200">{children}</div>
  );
};
