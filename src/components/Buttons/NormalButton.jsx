import clsx from "clsx";
import { useCallback } from "react";

const NormalButton = ({
  action = () => {},
  actionLabel = "",
  disabled = false,
  error = false,
  primary = false,
  secondary = false,
  danger = false,
  success = false,
  className,
}) => {
  const handleAction = useCallback(() => {
    action();
  }, [action]);

  return (
    <button
      className={clsx(
        "p-2 rounded-md text-dark text-xs",
        {
          "bg-dark": disabled,
          "text-white": primary || danger || success,
          "bg-sky200 hover:bg-sky100": primary,
          "text-dark500 border-2 border-dark500": secondary,
          "bg-rose200 hover:bg-rose100": danger,
          "bg-lime200 hover:bg-lime100": success,
        },
        className
      )}
      disabled={disabled}
      onClick={handleAction}
    >
      {actionLabel}
    </button>
  );
};

export default NormalButton;
