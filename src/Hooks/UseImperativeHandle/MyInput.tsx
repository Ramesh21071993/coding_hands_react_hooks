import { forwardRef, useRef, useImperativeHandle } from 'react';


interface InputProps {
  placeholder?: string;
}


export interface InputRef {
  focus: () => void;
  scrollIntoView: () => void;
}

const MyInput = forwardRef<InputRef, InputProps>(function MyInput(props, ref) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus();
      },
      scrollIntoView() {
        inputRef.current?.scrollIntoView();
      },
    };
  }, []);

  return <input {...props} ref={inputRef} />;
});

export default MyInput;
