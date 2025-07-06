import { NativeSelect } from '@mantine/core'

import { useLanguage } from '@/context/LanguageContext'

export default function ButtonLanguage() {
  const { language, changeLanguage } = useLanguage()

  return (
    <NativeSelect
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      data={[
        { value: 'en', label: 'English' },
        { value: 'pt', label: 'Português' },
      ]}
      defaultValue="en"
      className="w-48"
    />
  )
}
