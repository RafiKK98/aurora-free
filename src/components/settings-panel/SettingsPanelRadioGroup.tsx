import { RadioGroup, RadioGroupProps, formControlLabelClasses, radioClasses } from '@mui/material';

const SettingsPanelRadioGroup = ({ children, sx, ...rest }: RadioGroupProps) => {
  return (
    <RadioGroup
      sx={{
        flexDirection: 'row',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 1,
        [`& .${formControlLabelClasses.root}`]: {
          margin: 0,
        },
        [`& .${radioClasses.root}`]: {
          display: 'none',
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </RadioGroup>
  );
};

export default SettingsPanelRadioGroup;
