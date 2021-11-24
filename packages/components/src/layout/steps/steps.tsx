import RcSteps from 'rc-steps';
import { ReactNode, useEffect, useState } from 'react';
import { Button, clx, RcForm, useForm } from '../..';

const { Step } = RcSteps;

type IStepsData = { title: string; content: ReactNode };

export type IInput = {
  onSubmitForm?: (value: any) => Promise<any>;
  confirmContent: IStepsData;
  stepsData: IStepsData[];
  resetAfterSubmit?: boolean;
};

const Steps = (props: IInput) => {
  const { onSubmitForm, confirmContent, resetAfterSubmit, stepsData = [] } = props;

  const [current, setCurrent] = useState(0);
  const [steps, setSteps] = useState(stepsData);

  const [form] = useForm();
  const finalContent = [...steps, confirmContent];

  const isFinalStep = steps?.find?.(
    (i) => i?.title.toLowerCase() === finalContent[finalContent.length - 1]?.title.toLowerCase(),
  );

  const submit = () => {
    form.submit();
  };

  const onReset = () => {
    setCurrent(0);
    setSteps(stepsData);
    form.resetFields();
  };

  const previous = () => {
    setCurrent(current - 1);
    setSteps(stepsData);
  };

  useEffect(() => {
    if (current === stepsData.length && !isFinalStep) {
      setSteps(finalContent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <RcForm
      hasSubmitBtn={false}
      form={form}
      onFinish={async (v) => {
        const isPlus = current > steps.length ? 0 : 1;
        if (isFinalStep) {
          await onSubmitForm?.(v)?.then?.(() => {
            resetAfterSubmit && onReset?.();
          });
        } else {
          setCurrent(current + isPlus);
        }
      }}
    >
      <RcSteps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </RcSteps>
      <div className={clx('min-h-200px bg-gray-50 mt-6 p-4 rounded-md')}>
        {steps.map((i, k) => {
          return (
            <div key={k} className={clx('hidden', current === k && 'block')}>
              {(current === k || isFinalStep) && i.content}
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        {current > 0 && (
          <>
            <Button variant="outline" onClick={onReset}>
              Reset All
            </Button>
            <Button variant="outline" onClick={previous}>
              Previous
            </Button>
          </>
        )}
        {(current < steps.length - 1 || (current === steps.length - 1 && !isFinalStep)) && (
          <Button onClick={submit}>Next</Button>
        )}
        {isFinalStep && (
          <Button color="success" onClick={submit}>
            Submit
          </Button>
        )}
      </div>
    </RcForm>
  );
};

export default Steps;
