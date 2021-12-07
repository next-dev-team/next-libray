import { useReactive } from 'ahooks';
import { clx, twColors } from 'components-next';
import { Line } from 'rc-progress';
import Upload, { UploadProps } from 'rc-upload';
export type IUpload = UploadProps;

export function file2Obj(file: any): any {
  return {
    ...file,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file,
  };
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const DragUpload = (props: IUpload) => {
  const { name, className, ...rest } = props;

  const state = useReactive({
    uploadPt: 0,
    previewImg: null,
  });
  const { previewImg } = state;

  return (
    <div>
      <Upload
        {...{
          action: '/https://www.mocky.io/v2/5cc8019d300000980a055e76',
          accept: '.png',
          name: 'file',
          type: 'drag',
          // beforeUpload: (file) => {
          //   console.log('beforeUpload', file.name);
          //   return true;
          // },
          onStart: async (file) => {
            console.log('onStart', file);
            const filleObj = file2Obj?.(file);
            const fileTo64 = await getBase64?.(filleObj?.originFileObj);
            if (fileTo64) {
              state.previewImg = fileTo64;
            }
          },
          onSuccess: (file) => {
            console.log('onSuccess');
          },
          onProgress(step, file) {
            console.log('onProgress', Math.round(step.percent), file.name);
            (state.uploadPt = Math.round(step.percent)), file.name;
          },
          onError(err) {
            console.log('onError', err);
          },
          ...rest,
        }}
      >
        <div className="rounded-lg overflow-hidden w-full">
          <div
            className={clx(
              'text-gray-400 text-center relative h-36 rounded-lg border-dashed border-2 border-gray-200 hover:border-blue-200 bg-white flex justify-center items-center hover:cursor-pointer',
            )}
          >
            {previewImg && (
              <div className="mb-4 h-32">
                <img src={previewImg} className="h-full object-cover p-2" />
              </div>
            )}
            <div
              className={
                (clx('flex flex-col'),
                previewImg &&
                  'absolute bottom-0 py-[2px] bg-gradient-to-r from-green-400 to-blue-500 w-full rounded-md text-white text-xs opacity-60')
              }
            >
              <span>Attach you files here</span>
              <span> or </span>
              <span className={clx('text-blue-400', previewImg && 'text-white')}>Browse files</span>
            </div>
          </div>
        </div>

        {state.uploadPt > 0 && state.uploadPt !== 100 && (
          <Line percent={state.uploadPt} strokeWidth={3} strokeColor={twColors.blue['200']} />
        )}
      </Upload>
    </div>
  );
};

export default DragUpload;
