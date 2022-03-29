import clsx from "clsx";
import { UserBox } from "..";
import "./style.scss";

interface FakeUserBoxProps {
  [key: string]: any;
  className?: string;
}

export default function FakeUserBox({ className, ...rest }: FakeUserBoxProps) {
  return (
    <UserBox
      {...rest}
      className={clsx("fake-user-box", className)}
      name="is Loading"
      avatar="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    />
  );
}
