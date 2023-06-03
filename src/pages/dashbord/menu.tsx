import { FC } from 'react';

interface menuProps {}

type Input = {
  name: string;
  price: number;
  categories: MultiValue<{ value: string; label: string }>;
  file: undefined | File;
};

const initialInput = {
  name: '',
  price: 0,
  categories: [],
  file: undefined
};

const menu: FC<menuProps> = ({}) => {
  const [input, setInput] = useState<Input>(initialInput);

  return (
    <>
      <div className=''>
        <div className='mx-auto flex max-w-xl flex-col gap-2'>
          <input
            name='name'
            className='border-non bg-grey-200 h-12 rounded-sm'
            type='text'
            placeholder='name'
            onChange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
            value={input.name}
          />

          <input
            name='price'
            className='border-non bg-grey-200 h-12 rounded-sm'
            type='number'
            placeholder='price'
            onChange={(e) =>
              setInput((prev) => ({ ...prev, price: Number(e.target.value) }))
            }
            value={input.price}
          />

          <DynamicSelect
            value={input.categories}
            // @ts-expect-error when using dynamic import, typescript doesn't know about the
            onChange={(e) => setInput((prev) => ({ ...prev, categories: e }))}
            isMulti
            className='h-12'
            options={selectOptions}
          />

          <label htmlFor='file'></label>
        </div>
      </div>
    </>
  );
};

export default menu;
