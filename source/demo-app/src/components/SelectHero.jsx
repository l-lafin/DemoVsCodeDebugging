import React from 'react';
import * as lodash from 'lodash';
import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

const SelectHero = (props) => {
  const { label, options, ...other } = props;
  const labelId = lodash.uniqueId('label-hero-field');
  const classes = useStyles();

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        id={lodash.uniqueId('hero-field')}
        label={label}
        labelId={labelId}
        {...other}
      >
        {options.map((option) => (
          <MenuItem key={lodash.uniqueId('item-hero-field')} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectHero.defaultProps = {
  classes: {},
  options: [],
};

export { SelectHero };
