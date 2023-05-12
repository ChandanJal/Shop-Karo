import Button from "./Button";

export default function OutlineButton({ Icon, size = "md", children, ...rest }) {
  return (
    <Button Icon={Icon} {...rest} className={`btn-outline ${size}`}>
      {children}
    </Button>
  );
}
