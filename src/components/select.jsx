import React from 'react';
import { makeStyles,} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    backgroundColor: 'white'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SimpleSelect() {
  const classes = useStyles();
  const [period, setPeriod] = React.useState('');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Choose your destination</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={period}
          onChange={handleChange}
          label="Period"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ancient Egypt</MenuItem>
          <MenuItem value={11}>European Paintings</MenuItem>
          <MenuItem value={13}>Greek and Roman Antiquity</MenuItem>
          <MenuItem value={6}>Asia</MenuItem>
        </Select>
      </FormControl>
        <Button variant="contained" color="primary" href={`/period/${period}`}>
          Let's go!
        </Button>
    </div>
  );
}
export default SimpleSelect;