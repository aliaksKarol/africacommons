import { ArrowDownIcon } from "@/components/_shared/icons/ArrowDownIcon";
import { Transition } from "@headlessui/react";
import { FC, useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  label?: string;
  defaultValue?: SelectOption;
}

export const SelectField: FC<SelectProps> = ({
  options,
  label,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className='inline-flex justify-center items-center gap-1 w-full rounded-sm border border-gray-600 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline focus:outline-gray-400 focus:border-gray-100 focus:bg-gray-500 focus:text-white focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup='true'
          aria-expanded='true'
        >
          {selectedOption ? selectedOption.label : options[0].label ?? "Select"}
          <ArrowDownIcon isOpen={isOpen} />
        </button>
      </div>

      <Transition
        show={isOpen}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default SelectField;
