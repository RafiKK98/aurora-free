import { ChangeEvent } from 'react';
import { FontFamily } from 'config';
import { useSettingsContext } from 'providers/SettingsProvider';
import FontFamilyItem from './FontFamilyItem';
import SettingsPanelRadioGroup from './SettingsPanelRadioGroup';

const FontFamilyTab = () => {
  const {
    config: { fontFamily },
    setConfig,
  } = useSettingsContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value as FontFamily;
    setConfig({
      fontFamily: value,
    });
  };

  return (
    <SettingsPanelRadioGroup
      name="font-family"
      value={fontFamily}
      onChange={handleChange}
      sx={{
        gridTemplateColumns: 'repeat(1, 1fr)',
      }}
    >
      <FontFamilyItem fontFamily="Plus Jakarta Sans" active={fontFamily === 'Plus Jakarta Sans'} />
      <FontFamilyItem fontFamily="Poppins" active={fontFamily === 'Poppins'} />
      <FontFamilyItem fontFamily="Roboto" active={fontFamily === 'Roboto'} />
      <FontFamilyItem fontFamily="Inter" active={fontFamily === 'Inter'} />
    </SettingsPanelRadioGroup>
  );
};

export default FontFamilyTab;
