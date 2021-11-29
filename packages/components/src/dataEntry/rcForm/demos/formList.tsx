// @ts-nocheck
import { IDemoLayout } from 'components-layout';
import { Button, RcField, RcForm, useForm } from 'components-next';

export const FormListDemo = (): IDemoLayout['data'][0] => {
  const [formDynamic] = useForm();

  return {
    title: 'Form With Dynamic Field',
    span: '24',
    component: (
      <RcForm
        form={formDynamic}
        onFinish={(values) => {
          alert(JSON.stringify(values));
          // console.log('values', values);
        }}
      >
        <RcForm.List name="users" initialValue={[{}]}>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field, index) => {
                  const lName = [field.name, 'lastName'];
                  const fName = [field.name, 'firstName'];
                  const decName = [field.name, 'decName'];
                  const wau = [field.name, 'wau'];

                  return (
                    <div className="relative border border-gray-100 mb-4" key={field.key}>
                      <div className="relative border border-t-0 border-gray-100 px-5 py-2">
                        <h2>dd</h2>
                      </div>
                      <div className="grid  md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-2 p-5">
                        <RcField
                          {...field}
                          key={String(fName)}
                          {...{
                            name: fName,
                            label: 'First Name',
                            rules: [{ required: true }],
                          }}
                        />
                        <RcField
                          {...field}
                          key={String(lName)}
                          {...{
                            various: 'select',
                            name: lName,
                            label: 'Last Name',
                            rules: [{ required: true }],
                            options: [{ value: 1 }],
                          }}
                        />
                        <RcField
                          {...field}
                          key={String(decName)}
                          {...{
                            various: 'textArea',
                            name: decName,
                            label: 'des',
                            rules: [{ required: true }],
                          }}
                        />

                        <RcField
                          {...field}
                          key={String(wau)}
                          {...{
                            various: 'switch',
                            name: wau,
                            label: 'Are you from Cambodia?',
                            switchProps: { unCheckedChildren: 'No', checkedChildren: 'Yes' },
                          }}
                        />

                        <div className="absolute right-2.5 top-2.5">
                          {index > 0 && (
                            <Button
                              variant="outline"
                              className="px-2 py-px bg-red-400 text-white"
                              onClick={() => {
                                remove(index);
                              }}
                              title="X"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <Button
                  onClick={() => {
                    add();
                  }}
                  className="w-full"
                >
                  New Field
                </Button>
              </>
            );
          }}
        </RcForm.List>
      </RcForm>
    ),
  };
};
