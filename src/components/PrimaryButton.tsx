import { useRef, type ReactElement, type ReactNode } from 'react';
import type { AriaButtonOptions } from 'react-aria';
import { useButton } from 'react-aria';

interface PrimaryButtonProps extends Omit<AriaButtonOptions<'button'>, 'children'> {
  readonly label: ReactNode;
}

export function PrimaryButton({ label, ...props }: Readonly<PrimaryButtonProps>): ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, buttonRef);

  return (
    <button
      ref={buttonRef}
      {...buttonProps}
    >
      {label}
    </button>
  );
}
