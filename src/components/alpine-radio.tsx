import { useRadio, VisuallyHidden, RadioProps} from "@heroui/react";

export const AlpineRadio = (props: RadioProps) => {
    const {
      Component,
      children,
      getBaseProps,
      getInputProps,
      getLabelProps,
      getLabelWrapperProps,
    } = useRadio(props);
  
    return (
      <Component
        {...getBaseProps()}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div {...getLabelWrapperProps()}>
          {children && <span {...getLabelProps()}>{children}</span>}
        </div>
      </Component>
    );
  };