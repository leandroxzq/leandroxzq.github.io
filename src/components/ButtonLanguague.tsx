import { Select } from '@mantine/core'

import { useLanguage } from '@/context/LanguageContext'

export default function ButtonLanguage() {
  const { language, changeLanguage } = useLanguage()

  return (
    <Select
      classNames={{
        root: 'text-white',
        wrapper: 'bg-[#121212] border border-gray-700 rounded-md',
        input: 'bg-[#121212] text-white border-none focus:ring-2 focus:ring-yellow-300 rounded-md',
        dropdown: 'bg-[#1a1a1a] border border-gray-700 text-white',
        option: 'bg-[#1a1a1a] text-white hover:bg-gray-700',
      }}
      value={language}
      onChange={(value) => {
        if (value) changeLanguage(value)
      }}
      data={[
        { value: 'en', label: 'English' },
        { value: 'pt', label: 'Português' },
      ]}
      defaultValue="en"
      className="w-48"
    />
  )
}
