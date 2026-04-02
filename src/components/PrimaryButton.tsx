import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { Button, type ButtonProps, type ButtonRenderProps } from 'react-aria-components';
import { toCssProperties } from '../helpers/styles';

interface PrimaryButtonProps extends Omit<ButtonProps, 'children'> {
  readonly label: ReactNode;
}

export function PrimaryButton({ label, style, ...props }: PrimaryButtonProps): ReactElement {
  const handleStyle = useCallback((args: ButtonRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, style);
  }, [style]);

  return (
    <Button
      style={handleStyle}
      {...props}
    >
      {label}
    </Button>
  );
}
