import { useReactive } from 'ahooks';
//@ts-ignore
import { clx, twColors } from 'components-next';
import { Line } from 'rc-progress';
import Upload, { UploadProps } from 'rc-upload';
export type IUpload = UploadProps & { imgPersist?: string };

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
  const { name, className, imgPersist, ...rest } = props;

  const state = useReactive({
    uploadPt: 0,
    previewImg: imgPersist,
  });
  const { previewImg } = state;

  return (
    <div>
      <Upload
        {...{
          accept: 'image/*',
          name: 'file',
          type: 'drag',
          onStart: async (file) => {
            state.uploadPt = 0;
            console.log('onStart', file);
            const filleObj = file2Obj?.(file);
            const fileTo64 = await getBase64?.(filleObj?.originFileObj);
            if (fileTo64) {
              state.previewImg = fileTo64 as string;
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

        {state.uploadPt > 0 && (
          <Line
            percent={state.uploadPt}
            strokeWidth={2}
            strokeColor={twColors.blue['200']}
            className="mt-2"
          />
        )}
      </Upload>
    </div>
  );
};

export default DragUpload;
