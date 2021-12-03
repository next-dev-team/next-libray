import { useAsyncEffect, useCreation } from 'ahooks';
import { FormInstance } from 'rc-field-form';
import RcSteps from 'rc-steps';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button, clx, goToTop, isProd, RcForm, useForm } from '../..';

const { Step } = RcSteps;

type IStepsData = { title: string; content: ReactNode };

export type IStep = {
  onSubmitForm?: (value: any) => Promise<any>;
  confirmContent: IStepsData;
  stepsData: IStepsData[];
  /**
   * get data load from server
   * return true to make it work
   */
  getLoading?: () => Promise<boolean>;
  resetAfterSubmit?: boolean;
  onNext?: (v?: any) => void;
  form?: FormInstance<any>;
};

const Steps = (props: IStep) => {
  const [dfForm] = useForm();

  const {
    onNext,
    onSubmitForm,
    confirmContent,
    resetAfterSubmit,
    stepsData = [],
    form = dfForm,
    getLoading,
  } = props;

  const [current, setCurrent] = useState(0);
  const [steps, setSteps] = useState(stepsData);

  const finalContent = useCreation(() => {
    return [...steps, confirmContent];
  }, [steps, confirmContent]);

  const isFinalStep = useCreation(() => {
    return steps?.find?.(
      (i) => i?.title.toLowerCase() === finalContent[finalContent.length - 1]?.title.toLowerCase(),
    );
  }, [steps]);

  const submit = (v: any) => {
    onNext?.(v);
    form.submit();
    if (isProd) {
      goToTop();
    }
  };

  const onReset = useCallback(() => {
    setCurrent(0);
    setSteps(stepsData);
    form.resetFields();
  }, [stepsData, form]);

  const previous = useCallback(() => {
    setCurrent(current - 1);
    setSteps(stepsData);
    if (isProd) {
      goToTop();
    }
  }, [stepsData, current]);

  useEffect(() => {
    if (current === stepsData.length && !isFinalStep) {
      setSteps(finalContent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useAsyncEffect(async () => {
    if (await getLoading?.()) {
      setSteps(stepsData);
    }
  }, [getLoading]);

  return (
    <RcForm
      // hasSubmitBtn={false}
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
